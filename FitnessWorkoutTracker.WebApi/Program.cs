using FitnessWorkoutTracker.WebApi.Extensions;

var builder = WebApplication.CreateBuilder(args);

string cors = "allowOrigins";

builder.Services.ConfigureAppSettings(builder.Configuration);
builder.Services.CreateDatabaseTempFolderAndGrantPermissions();
builder.Services.AddApplicationRegistrations();

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: cors,
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod();
        }
    );
});

var app = builder.Build();

app.SeedApplicationData();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(cors);

app.UseAuthorization();

app.MapControllers();

app.Run();
