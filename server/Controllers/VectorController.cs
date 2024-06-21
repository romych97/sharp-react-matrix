using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("api/vector")]
public class VectorController : ControllerBase {
    
    [HttpGet("random")]
    public IActionResult GetRandomVector() {
        var vector = new Vector(10);
        return Ok(vector.ToArray());
    }

    [HttpPost("multiply")]
    public IActionResult MultiplyVector([FromBody] List<int> vector) {
        if (vector == null) {
            return BadRequest("Vector is required");
        }

        var result = new Vector(vector.Select(element => element * 2));
        return Ok(result.ToArray());
    }
}
