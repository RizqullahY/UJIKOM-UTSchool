using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[Route("api/[controller]")]
[ApiController]
public class KendaraanController : ControllerBase
{
   private readonly DbManager _dbManager;
   private readonly Response response = new Response();

   public KendaraanController(IConfiguration configuration)
   {
      _dbManager = new DbManager(configuration);
   }

   [HttpGet]
   public IActionResult GetAllKendaraans()
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  response.data = _dbManager.GetAllKendaraans();
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }

   [HttpGet("{id_kendaraan}")]
   public IActionResult GetKendaraanById(int id_kendaraan)
      {
            try
            {
                  Kendaraan kendaraan = _dbManager.GetKendaraanById(id_kendaraan);
                  if (kendaraan == null)
                  {
                  response.status = 404;
                  response.message = $"Kendaraan with ID {id_kendaraan} not found.";
                  return NotFound(response);
                  }

                  response.status = 200;
                  response.message = "Success";
                  response.data = kendaraan;
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }

   [HttpPost]
   public IActionResult CreateKendaraan([FromBody] Kendaraan kendaraan)
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  _dbManager.CreateKendaraan(kendaraan);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }
   [HttpPut("{id_kendaraan}")]
   public IActionResult UpdateKendaraan(int id_kendaraan, [FromBody] Kendaraan kendaraan)
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  _dbManager.UpdateKendaraan(id_kendaraan, kendaraan);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }

   [HttpDelete("{id_kendaraan}")]
   public IActionResult DeleteKendaraan(int id_kendaraan)
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  _dbManager.DeleteKendaraan(id_kendaraan);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }
   [HttpGet("/GetKendaraanByIdUser/{id_user}")]
   public IActionResult GetKendaraanByIdUser(int id_user)
      {
            try
            {
                  Kendaraan kendaraan = _dbManager.GetKendaraanByIdUser(id_user);
                  if (kendaraan == null)
                  {
                  response.status = 404;
                  response.message = $"Kendaraan with ID {id_user} not found.";
                  return NotFound(response);
                  }

                  response.status = 200;
                  response.message = "Success";
                  response.data = kendaraan;
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }
   [HttpGet("/GetKendaraanByMerk/{merk}")]
   public IActionResult GetKendaraanByMerk(string merk)
      {
            try
            {
                  Kendaraan kendaraan = _dbManager.GetKendaraanByMerk(merk);
                  if (kendaraan == null)
                  {
                  response.status = 404;
                  response.message = $"Kendaraan with ID {merk} not found.";
                  return NotFound(response);
                  }

                  response.status = 200;
                  response.message = "Success";
                  response.data = kendaraan;
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }
}
