using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Microsoft.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "STACK.API", Version = "v27" });
});
// Add services to the container.
builder.Services.AddControllers(); // Tambahkan layanan controller
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "STACK.Api v27"));
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); 
app.UseCors(options => options
        .WithOrigins("http://localhost:3000")
        // .WithHeaders('Content-Type')
        .WithHeaders(HeaderNames.ContentType)
        .WithMethods("GET", "POST", "PUT", "DELETE")
    );
app.Run();
