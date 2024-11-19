using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
private readonly DbManager _dbManager;
private readonly Response response = new Response();

public UserController(IConfiguration configuration)
{
      _dbManager = new DbManager(configuration);
}

[HttpGet]
public IActionResult GetAllUsers()
{
      try
      {
            response.status = 200;
            response.message = "Success";
            response.data = _dbManager.GetAllUsers();
      }
      catch (Exception ex)
      {
            response.status = 500;
            response.message = ex.Message;
      }
      return Ok(response);
}
[HttpPost]
public IActionResult CreateUser([FromBody] User user)
{
      try
      {
            response.status = 200;
            response.message = "Success";
            _dbManager.CreateUser(user);
      }
      catch (Exception ex)
      {
            response.status = 500;
            response.message = ex.Message;
      }
      return Ok(response);
}
[HttpPut("{id_user}")]
public IActionResult UpdateUser(int id_user, [FromBody] User user)
{
      try
      {
            response.status = 200;
            response.message = "Success";
            _dbManager.UpdateUser(id_user, user);
      }
      catch (Exception ex)
      {
            response.status = 500;
            response.message = ex.Message;
      }
      return Ok(response);
}
[HttpDelete("{id_user}")]
public IActionResult DeleteUser(int id_user)
{
      try
      {
            response.status = 200;
            response.message = "Success";
            _dbManager.DeleteUser(id_user);
      }
      catch (Exception ex)
      {
            response.status = 500;
            response.message = ex.Message;
      }
      return Ok(response);
}
[HttpGet("{id_user}")]
public IActionResult GetUserById(int id_user)
{
      try
      {
            var layanan = _dbManager.GetUserById(id_user);
            if (layanan == null)
            {
                  response.status = 404;
                  response.message = $"user with ID {id_user} not found";
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
[HttpPost("login")]
public IActionResult Login([FromBody] User loginUser)
{
try
{
      var foundUser = _dbManager.GetUserByUsername(loginUser.username);

      if (foundUser == null || foundUser.password != loginUser.password)
      {
            response.status = 401;
            response.message = "Invalid username or password";
            return Unauthorized(response);
      }

      response.status = 200;
      response.message = "Success";
      response.data = new 
      {
            username = foundUser.username,
            id_user = foundUser.id_user,
            role = foundUser.role
      };

      return Ok(response);
}
catch (Exception ex)
{
      response.status = 500;
      response.message = ex.Message;
      return StatusCode(500, response);
}
}


}
