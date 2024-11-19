public class TransaksiLayanan
{
   public int id { get; set; }
   public int id_pelanggan { get; set; }
   public int id_kendaraan { get; set; }
   public int id_layanan { get; set; }
   public DateTime? tanggal_transaksi { get; set; }
   public int biaya_transaksi { get; set; } 
   public string? status_transaksi { get; set; } 
   public DateTime? created_at { get; set; } 
   public DateTime? updated_at { get; set; } 

}
