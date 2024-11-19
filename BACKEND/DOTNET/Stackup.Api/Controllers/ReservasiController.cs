using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[Route("api/[controller]")]
[ApiController]
public class ReservasiController : ControllerBase
{
      private readonly DbManager _dbManager;
      private readonly Response response = new Response();

      public ReservasiController(IConfiguration configuration)
      {
            _dbManager = new DbManager(configuration);
      }
      [HttpGet]
      public IActionResult GetAllReservasi()
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  response.data = _dbManager.GetAllReservasi();
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }
      [HttpGet("/getByUserId/{id_user}")]
      public IActionResult GetReservasiByIdUser(int id_user)
      {
            try
            {
                  var layanan = _dbManager.GetReservasiByIdUser(id_user);
                  if (layanan == null)
                  {
                        response.status = 404;
                        response.message = $"Reservasi with ID {id_user} not found";
                        return NotFound(response);
                  }

                  response.status = 200;
                  response.message = "Success";
                  response.data = layanan;
                  return Ok(response);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
                  return StatusCode(500, response);
            }
      }
      [HttpGet("{id}")]
      public IActionResult GetReservasiById(int id)
      {
            try
            {
                  var layanan = _dbManager.GetReservasiById(id);
                  if (layanan == null)
                  {
                        response.status = 404;
                        response.message = $"Reservasi with ID {id} not found";
                        return NotFound(response);
                  }

                  response.status = 200;
                  response.message = "Success";
                  response.data = layanan;
                  return Ok(response);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
                  return StatusCode(500, response);
            }
      }
      [HttpPost]
      public IActionResult CreateReservasi([FromBody] Reservasi Reservasi)
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  _dbManager.CreateReservasi(Reservasi);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = $"Error: {ex.Message}";
                  Console.WriteLine(ex.ToString());
            }
            return Ok(response);
      }
      [HttpPut("{id}")]
      public IActionResult UpdateReservasi(int id, [FromBody] Reservasi Reservasi)
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  _dbManager.UpdateReservasi(id, Reservasi);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }
      [HttpDelete("{id}")]
      public IActionResult DeleteReservasi(int id)
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  _dbManager.DeleteReservasi(id);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }
}
