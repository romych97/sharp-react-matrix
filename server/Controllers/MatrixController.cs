using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/matrix")]
public class MatrixController : ControllerBase
{
    private readonly Random _rand = new Random();

    [HttpGet("random")]
    public IActionResult GetRandomMatrices() {
        var matrix1 = GenerateRandomMatrix();
        var matrix2 = GenerateRandomMatrix();
        return Ok(new { Matrix1 = matrix1, Matrix2 = matrix2 });
    }

    [HttpPost("multiply")]
    public IActionResult MultiplyMatrices([FromBody] MultiplyRequest request)
    {
        var result = Multiply(request.Matrix1, request.Matrix2);
        return Ok(result);
    }

    private int[][] GenerateRandomMatrix() {
        int[][] matrix = new int[10][];
        for (int i = 0; i < 10; i++) {
            matrix[i] = new int[10];
            for (int j = 0; j < 10; j++) {
                matrix[i][j] = _rand.Next(0, 101);
            }
        }
        return matrix;
    }

    private int[][] Multiply(int[][] matrix1, int[][] matrix2) {
        int size = matrix1.Length;
        int[][] result = new int[size][];
        for (int i = 0; i < size; i++) {
            result[i] = new int[size];
        }

        Parallel.For(0, size, i => {
            for (int j = 0; j < size; j++) {
                int sum = 0;
                for (int k = 0; k < size; k++) {
                    sum += matrix1[i][k] * matrix2[k][j];
                }
                result[i][j] = sum;
            }
        });

        return result;
    }
}

public class MultiplyRequest {
    public int[][] Matrix1 { get; set; }
    public int[][] Matrix2 { get; set; }
}
