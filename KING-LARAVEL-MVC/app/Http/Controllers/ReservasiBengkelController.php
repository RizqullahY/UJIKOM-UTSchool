<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ReservasiBengkel;

class ReservasiBengkelController extends Controller
{
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            if (!$request->session()->has('user_id')) {
                return redirect('/');
            } 
            return $next($request);
        });
    }
    public function index()
    {
        $reservations = ReservasiBengkel::with('layanan' , 'user')->get();
        return view('reservasi.index', compact('reservations'));
    }

    public function create()
    {
        return view('reservasi.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_layanan' => 'required|integer',
            'id_user' => 'required|integer',
            'kendaraan' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'tanggal' => 'required|date',
        ]);

        ReservasiBengkel::create($request->all());

        return redirect()->route('reservasi.index')->with('success', 'Reservation created successfully.');
    }

    public function show($id)
    {
        $reservation = ReservasiBengkel::findOrFail($id);
        return view('reservasi.show', compact('reservation'));
    }

    public function edit($id)
    {
        $reservation = ReservasiBengkel::findOrFail($id);
        return view('reservasi.edit', compact('reservation'));
    }

    // public function updateStatus(Request $request, $id)
    // {
    //     $request->validate([
    //         'status' => 'required|string|in:Lunas,Belum Lunas', 
    //     ]);

    //     $reservation = ReservasiBengkel::findOrFail($id);
    //     $reservation->status = $request->status;
    //     $reservation->save();

    //     return redirect()->back()->with('success', 'Status reservation updated successfully.');
    // }
    public function updateStatus(Request $request, $id)
    {
        $reservation = ReservasiBengkel::find($id);
        
        if ($reservation) {
            $amount = $request->input('amount');
            $price = $reservation->layanan->harga;

            if ($amount >= $price) {
                $reservation->status = 'Lunas';
                $reservation->total = $amount;
                $reservation->kembalian = $amount - $price;
                $reservation->save();
                
                return response()->json([
                    'message' => 'Status updated to Lunas',
                    'total' => $reservation->total,
                    'kembalian' => $reservation->kembalian
                ]);
            } else {
                return response()->json([
                    'message' => 'Amount is less than the service price'
                ], 400);
            }
        } else {
            return response()->json([
                'message' => 'Reservation not found'
            ], 404);
        }
    }

    public function destroy($id)
    {
        $reservation = ReservasiBengkel::findOrFail($id + 1);
        $reservation->delete();

        return redirect()->route('reservasi.index')->with('success', 'Reservation deleted successfully.');
    }
}
