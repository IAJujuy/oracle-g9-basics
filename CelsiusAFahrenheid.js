public class CelsiusAFahrenheit {
    public static void main(String[] args) {
        // Ejemplo: cambiar este valor para probar
        double celsius = 36.6;

        // Fórmula: (temperatura * 1.8) + 32
        double fahrenheit = (celsius * 1.8) + 32;

        // Versión entera (redondeada)
        int fahrenheitEntero = (int) Math.round(fahrenheit);

        // (Opcional) Versión truncada: int fahrenheitTruncado = (int) fahrenheit;

        System.out.println("Celsius: " + celsius);
        System.out.println("Fahrenheit (decimales): " + fahrenheit);
        System.out.println("Fahrenheit (entero, redondeado): " + fahrenheitEntero);
        // System.out.println("Fahrenheit (entero, truncado): " + fahrenheitTruncado);
    }
}
