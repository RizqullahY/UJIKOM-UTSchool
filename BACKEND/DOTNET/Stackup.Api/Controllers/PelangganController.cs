using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[Route("api/[controller]")]
[ApiController]
public class PelangganController : ControllerBase
{
   private readonly DbManager _dbManager;
   private readonly Response response = new Response();

   public PelangganController(IConfiguration configuration)
   {
      _dbManager = new DbManager(configuration);
   }

   [HttpGet]
   public IActionResult GetAllPelanggans()
   {
      try
      {
            response.status = 200;
            response.message = "Success";
            response.data = _dbManager.GetAllPelanggans();
      }
      catch (Exception ex)
      {
            response.status = 500;
            response.message = ex.Message;
      }
      return Ok(response);
   }
   [HttpGet("{id_pelanggan}")]
   public IActionResult GetPelangganById(int id_pelanggan)
   {
      try
      {
            Pelanggan pelanggan = _dbManager.GetPelangganById(id_pelanggan);
            if (pelanggan == null)
            {
               response.status = 404;
               response.message = $"Customer with ID {id_pelanggan} not found.";
               return NotFound(response);
            }

            response.status = 200;
            response.message = "Success";
            response.data = pelanggan;
      }
      catch (Exception ex)
      {
            response.status = 500;
            response.message = ex.Message;
      }
      return Ok(response);
   }
   [HttpPost]
   public IActionResult CreatePelanggan([FromBody] Pelanggan pelanggan)
   {
      try
      {
            response.status = 200;
            response.message = "Success";
            _dbManager.CreatePelanggan(pelanggan);
      }
      catch (Exception ex)
      {
            response.status = 500;
            response.message = ex.Message;
      }
      return Ok(response);
   }
   [HttpPut("{id_pelanggan}")]
   public IActionResult UpdatePelanggan(int id_pelanggan, [FromBody] Pelanggan pelanggan)
   {
      try
      {
            response.status = 200;
            response.message = "Success";
            _dbManager.UpdatePelanggan(id_pelanggan, pelanggan);
      }
      catch (Exception ex)
      {
            response.status = 500;
            response.message = ex.Message;
      }
      return Ok(response);
   }
   [HttpDelete("{id_pelanggan}")]
   public IActionResult DeletePelanggan(int id_pelanggan)
   {
      try
      {
            response.status = 200;
            response.message = "Success";
            _dbManager.DeletePelanggan(id_pelanggan);
      }
      catch (Exception ex)
      {
            response.status = 500;
            response.message = ex.Message;
      }
      return Ok(response);
   }
}
