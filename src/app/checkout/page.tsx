"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, CreditCard, ShoppingBag, Truck, Check } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { ShippingInfo } from '@/lib/types';

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, cartTotal, shippingInfo, updateShippingInfo, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ShippingInfo>(shippingInfo || {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Redirect to products if cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mb-6" />
        <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Parece que aún no has añadido productos a tu carrito. Explora nuestros productos y encuentra algo que te guste.
        </p>
        <Button asChild>
          <Link href="/productos">Ver Productos</Link>
        </Button>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
    if (!formData.address.trim()) newErrors.address = 'La dirección es requerida';
    if (!formData.city.trim()) newErrors.city = 'La ciudad es requerida';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'El código postal es requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      updateShippingInfo(formData);
      setCurrentStep(2);
    }
  };

  const handleWhatsAppCheckout = () => {
    // Format cart items for WhatsApp message
    const itemsList = cartItems.map(item => 
      `• ${item.quantity}x ${item.product.name} - ${formatPrice(item.product.promoPrice * item.quantity)}`
    ).join('\n');
    
    const message = `
*Nuevo Pedido de Moonlight Workspace*

*Productos:*
${itemsList}

*Subtotal:* ${formatPrice(cartTotal)}

*Datos de Envío:*
Nombre: ${formData.fullName}
Email: ${formData.email}
Teléfono: ${formData.phone}
Dirección: ${formData.address}
Ciudad: ${formData.city}
Código Postal: ${formData.postalCode}
${formData.notes ? `Notas: ${formData.notes}` : ''}
    `;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/5491139088010?text=${encodedMessage}`, '_blank');
    
    // Clear cart and redirect to success page
    clearCart();
    router.push('/checkout/success');
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/productos" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Productos
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        {/* Progress Steps */}
        <div className="flex items-center mb-12">
          <div className={`flex items-center ${currentStep >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              <Truck className="h-4 w-4" />
            </div>
            <span className="font-medium">Envío</span>
          </div>
          <div className="w-12 h-1 mx-2 bg-muted">
            <div className={`h-full bg-primary ${currentStep >= 2 ? 'w-full' : 'w-0'} transition-all duration-300`}></div>
          </div>
          <div className={`flex items-center ${currentStep >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              <CreditCard className="h-4 w-4" />
            </div>
            <span className="font-medium">Pago</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Información de Envío</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="fullName" className={errors.fullName ? 'text-destructive' : ''}>
                      Nombre Completo *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={errors.fullName ? 'border-destructive' : ''}
                    />
                    {errors.fullName && <p className="text-xs text-destructive mt-1">{errors.fullName}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className={errors.email ? 'text-destructive' : ''}>
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="phone" className={errors.phone ? 'text-destructive' : ''}>
                    Teléfono *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'border-destructive' : ''}
                  />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="address" className={errors.address ? 'text-destructive' : ''}>
                    Dirección *
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={errors.address ? 'border-destructive' : ''}
                  />
                  {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="city" className={errors.city ? 'text-destructive' : ''}>
                      Ciudad *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={errors.city ? 'border-destructive' : ''}
                    />
                    {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="postalCode" className={errors.postalCode ? 'text-destructive' : ''}>
                      Código Postal *
                    </Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className={errors.postalCode ? 'border-destructive' : ''}
                    />
                    {errors.postalCode && <p className="text-xs text-destructive mt-1">{errors.postalCode}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="notes">
                    Notas adicionales (opcional)
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes || ''}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>
                
                <Button onClick={handleContinue} className="w-full">
                  Continuar al Pago
                </Button>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Método de Pago</h2>
                
                <div className="mb-6">
                  <div className="flex items-center p-4 border rounded-lg mb-4 bg-muted/20">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">Finaliza tu compra a través de WhatsApp</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    Al hacer clic en "Finalizar Compra", serás redirigido a WhatsApp para completar tu pedido. Un asesor se pondrá en contacto contigo para coordinar el pago y la entrega.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                    Volver
                  </Button>
                  <Button onClick={handleWhatsAppCheckout} className="flex-1">
                    Finalizar Compra
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Resumen del Pedido</h2>
              
              <div className="max-h-80 overflow-y-auto pr-2 mb-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex py-3">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-sm font-medium">
                        <h3>{item.product.name}</h3>
                        <p className="ml-4">{formatPrice(item.product.promoPrice * item.quantity)}</p>
                      </div>
                      <div className="flex items-end justify-between text-xs">
                        <p className="text-muted-foreground">Cantidad: {item.quantity}</p>
                        <p className="text-muted-foreground">{formatPrice(item.product.promoPrice)} c/u</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <p>Subtotal</p>
                  <p>{formatPrice(cartTotal)}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p>Envío</p>
                  <p>A calcular</p>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold">
                  <p>Total</p>
                  <p>{formatPrice(cartTotal)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}