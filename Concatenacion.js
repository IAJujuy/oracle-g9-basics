public class Concatenacion {
    public static void main(String[] args) {
        String saludo = "Hola, mi nombre es ";
        String nombre = "Alicia";
        String continuacion = " y mi edad es ";
        int edad = 17;

        // Concatenación con +
        String mensaje = saludo + nombre + continuacion + edad;

        // Mostrar en consola
        System.out.println(mensaje);
    }
}
