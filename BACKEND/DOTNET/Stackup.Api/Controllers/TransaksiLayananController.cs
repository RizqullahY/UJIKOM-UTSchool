using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[Route("api/[controller]")]
[ApiController]
public class TransaksiLayananController : ControllerBase
{
private readonly DbManager _dbManager;
private readonly Response response = new Response();

public TransaksiLayananController(IConfiguration configuration)
{
_dbManager = new DbManager(configuration);
}

      [HttpGet]
      public IActionResult GetAllTransaksiLayanan()
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  response.data = _dbManager.GetAllTransaksiLayanan();
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }

      [HttpGet("{id_pelanggan}")]
      public IActionResult GetTransaksiLayananByIdPelanggan(int id_pelanggan)
      {
            try
            {
                  var layanan = _dbManager.GetTransaksiLayananByIdPelanggan(id_pelanggan);
                  if (layanan == null)
                  {
                        response.status = 404;
                        response.message = $"Layanan with ID {id_pelanggan} not found";
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
      public IActionResult CreateTransaksiLayanan([FromBody] TransaksiLayanan transaksiLayanan)
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  _dbManager.CreateTransaksiLayanan(transaksiLayanan);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }

      [HttpPut("{id}")]
      public IActionResult UpdateTransaksiLayanan(int id, [FromBody] TransaksiLayanan transaksiLayanan)
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  _dbManager.UpdateTransaksiLayanan(id, transaksiLayanan);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }

      [HttpDelete("{id}")]
      public IActionResult DeleteTransaksiLayanan(int id)
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  _dbManager.DeleteTransaksiLayanan(id);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }
}
