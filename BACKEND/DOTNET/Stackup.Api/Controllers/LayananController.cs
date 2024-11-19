using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[Route("api/[controller]")]
[ApiController]
public class LayananController : ControllerBase
{
private readonly DbManager _dbManager;
private readonly Response response = new Response();

public LayananController(IConfiguration configuration)
{
_dbManager = new DbManager(configuration);
}

      [HttpGet]
      public IActionResult GetAllLayanans()
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  response.data = _dbManager.GetAllLayanans();
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }

      [HttpGet("{id}")]
      public IActionResult GetLayananById(int id)
      {
            try
            {
                  var layanan = _dbManager.GetLayananById(id);
                  if (layanan == null)
                  {
                        response.status = 404;
                        response.message = $"Layanan with ID {id} not found";
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
      public IActionResult CreateLayanan([FromBody] Layanan layanan)
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  _dbManager.CreateLayanan(layanan);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }

      [HttpPut("{id}")]
      public IActionResult UpdateLayanan(int id, [FromBody] Layanan layanan)
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  _dbManager.UpdateLayanan(id, layanan);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }

      [HttpDelete("{id}")]
      public IActionResult DeleteLayanan(int id)
      {
            try
            {
                  response.status = 200;
                  response.message = "Success";
                  _dbManager.DeleteLayanan(id);
            }
            catch (Exception ex)
            {
                  response.status = 500;
                  response.message = ex.Message;
            }
            return Ok(response);
      }
}
