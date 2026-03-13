namespace chokolocos.Web.Models;

public class Item
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required List<string> Pictures { get; set; } // Lista de URLs de imágenes
    public required string Link { get; set; }
}
