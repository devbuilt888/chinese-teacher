/**
 * Complex number implementation for mathematical fractals
 */
export class Complex {
    public real: number;
    public imag: number;
    
    constructor(real: number, imag: number) {
        this.real = real;
        this.imag = imag;
    }
    
    /**
     * Creates a copy of this complex number
     */
    public copy(): Complex {
        return new Complex(this.real, this.imag);
    }
    
    /**
     * Adds another complex number to this one
     */
    public add(other: Complex): Complex {
        return new Complex(
            this.real + other.real,
            this.imag + other.imag
        );
    }
    
    /**
     * Subtracts another complex number from this one
     */
    public subtract(other: Complex): Complex {
        return new Complex(
            this.real - other.real,
            this.imag - other.imag
        );
    }
    
    /**
     * Multiplies this complex number by another
     */
    public multiply(other: Complex): Complex {
        return new Complex(
            this.real * other.real - this.imag * other.imag,
            this.real * other.imag + this.imag * other.real
        );
    }
    
    /**
     * Squares this complex number (z^2)
     */
    public square(): Complex {
        return new Complex(
            this.real * this.real - this.imag * this.imag,
            2 * this.real * this.imag
        );
    }
    
    /**
     * Returns the absolute value (magnitude) of this complex number
     */
    public abs(): number {
        return Math.sqrt(this.real * this.real + this.imag * this.imag);
    }
    
    /**
     * Raises this complex number to a power
     */
    public pow(n: number): Complex {
        let r = Math.pow(this.abs(), n);
        let theta = Math.atan2(this.imag, this.real) * n;
        return new Complex(r * Math.cos(theta), r * Math.sin(theta));
    }
    
    /**
     * Returns the complex conjugate
     */
    public conjugate(): Complex {
        return new Complex(this.real, -this.imag);
    }
    
    /**
     * Divides this complex number by another
     */
    public divide(other: Complex): Complex {
        const denominator = other.real * other.real + other.imag * other.imag;
        return new Complex(
            (this.real * other.real + this.imag * other.imag) / denominator,
            (this.imag * other.real - this.real * other.imag) / denominator
        );
    }
    
    /**
     * Creates a complex number from exponential function
     */
    public static exp(z: Complex): Complex {
        const exp_real = Math.exp(z.real);
        return new Complex(
            exp_real * Math.cos(z.imag),
            exp_real * Math.sin(z.imag)
        );
    }
    
    /**
     * Creates a string representation of this complex number
     */
    public toString(): string {
        if (this.imag === 0) {
            return this.real.toString();
        } else if (this.real === 0) {
            return this.imag === 1 ? 'i' : this.imag === -1 ? '-i' : `${this.imag}i`;
        } else {
            const sign = this.imag < 0 ? '-' : '+';
            const absImag = Math.abs(this.imag);
            return `${this.real} ${sign} ${absImag === 1 ? '' : absImag}i`;
        }
    }
} 