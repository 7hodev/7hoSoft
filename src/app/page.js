import Link from "next/link"
import { ArrowRight, BarChart3, CheckCircle, LineChart, Shield, Users2, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">7hoSoft</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Características
            </Link>
            <Link href="#dashboards" className="text-sm font-medium hover:text-primary">
              Dashboards
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Precios
            </Link>
          </nav>
          {/* Reemplazar <ModeToggle /> por <ThemeToggle /> */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Registrarse</Link>
              </Button>
            </div>
            {/* Menú móvil */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4">
                  <Link href="#features" className="text-lg font-medium hover:text-primary">
                    Características
                  </Link>
                  <Link href="#dashboards" className="text-lg font-medium hover:text-primary">
                    Dashboards
                  </Link>
                  <Link href="#pricing" className="text-lg font-medium hover:text-primary">
                    Precios
                  </Link>
                  <div className="flex flex-col gap-2 sm:hidden mt-4">
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/login">Iniciar Sesión</Link>
                    </Button>
                    <Button asChild className="w-full">
                      <Link href="/register">Registrarse</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 sm:py-32">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Gestiona tu negocio de <br className="hidden sm:inline" />
              forma inteligente
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Toma el control total de tu empresa con nuestro dashboard intuitivo. Analítica avanzada, gestión de
              equipos y reportes en tiempo real.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/register">
                  Comenzar ahora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#demo">Ver demo</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="container py-24 sm:py-32">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <LineChart className="h-10 w-10 text-primary" />
                <CardTitle>Gestión Integral</CardTitle>
                <CardDescription>
                  Todo lo que necesitas para administrar tu negocio en una sola plataforma.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Control financiero completo
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Gestión de inventario
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Facturación integrada
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users2 className="h-10 w-10 text-primary" />
                <CardTitle>Clientes y Personal</CardTitle>
                <CardDescription>Gestiona eficientemente tus relaciones con clientes y empleados.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Base de datos de clientes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Control de personal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Gestión de nóminas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary" />
                <CardTitle>Reportes y Análisis</CardTitle>
                <CardDescription>
                  Analíticas detalladas y reportes personalizados para tomar mejores decisiones.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Estadísticas en tiempo real
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Reportes personalizados
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Análisis predictivo
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="dashboards" className="relative overflow-hidden bg-muted/50 py-24 sm:py-32">
          <div className="container relative z-10">
            <div className="max-w-[800px] mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Control total de tu negocio en un solo lugar
              </h2>
              <p className="text-muted-foreground text-lg">
                Gestiona todos los aspectos de tu empresa: ventas, inventario, personal, finanzas y más. Todo integrado
                en una plataforma intuitiva y potente.
              </p>
            </div>

            <div className="grid gap-16">
              {/* Dashboard Principal - Finanzas y Ventas */}
              <div className="group relative grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Control Financiero y Ventas</h3>
                  <p className="text-muted-foreground">
                    Mantén el pulso de tu negocio con una visión completa de tus finanzas. Gestiona ingresos, gastos,
                    facturas y flujo de caja en tiempo real.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Seguimiento de ingresos y gastos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Gestión de facturas y pagos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Reportes de ventas diarios/mensuales
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Control de cuentas por cobrar/pagar
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                  <img
                    src="https://cdn.dribbble.com/userupload/10591528/file/original-0c14503bed25fc67ec4c45aeb6068a34.png?resize=1504x1128"
                    alt="Dashboard de finanzas y ventas"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Dashboard Inventario y Stock */}
              <div className="group relative grid gap-8 md:grid-cols-2 items-center">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1 md:order-1">
                  <img
                    src="https://cdn.dribbble.com/userupload/10591525/file/original-8c3a9b7ccf0c4c79f07c96abd1d3f5db.png?resize=1504x1128"
                    alt="Dashboard de inventario y stock"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Gestión de Inventario</h3>
                  <p className="text-muted-foreground">
                    Control completo de tu inventario y stock. Seguimiento en tiempo real de productos, alertas
                    automáticas y gestión de proveedores.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Control de stock en tiempo real
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Alertas de stock bajo
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Gestión de proveedores
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Trazabilidad de productos
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dashboard CRM y Personal */}
              <div className="group relative grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Clientes y Personal</h3>
                  <p className="text-muted-foreground">
                    Gestiona eficientemente tus relaciones con clientes y empleados. Seguimiento de interacciones,
                    historial y rendimiento del personal.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Base de datos de clientes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Historial de compras y preferencias
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Control de horarios y asistencia
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Gestión de nóminas y personal
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                  <img
                    src="https://cdn.dribbble.com/userupload/10591527/file/original-1b4fb3c0512c45fe2e8c8e1daa43b936.png?resize=1504x1128"
                    alt="Dashboard de CRM y gestión de personal"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Dashboard Analíticas */}
              <div className="group relative grid gap-8 md:grid-cols-2 items-center">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1 md:order-1">
                  <img
                    src="https://cdn.dribbble.com/userupload/10591526/file/original-562890e4b6e242edf52c3d962f85b6e8.png?resize=1504x1128"
                    alt="Dashboard de análisis y estadísticas"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Analíticas y Estadísticas</h3>
                  <p className="text-muted-foreground">
                    Toma decisiones informadas con análisis detallados de todos los aspectos de tu negocio. Visualiza
                    tendencias y genera reportes personalizados.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Métricas clave del negocio
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Análisis de tendencias
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Reportes personalizados
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Predicciones y forecasting
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" asChild>
                <Link href="/register">
                  Comienza a gestionar tu negocio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[200%] h-[200%] opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl transform rotate-45" />
            </div>
          </div>
        </section>

        <section id="pricing" className="container py-24 sm:py-32">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Planes adaptados a tu negocio</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Card key={i} className={i === 1 ? "border-primary" : ""}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold">{plan.price}€</span> /mes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8" variant={i === 1 ? "default" : "outline"}>
                    Empezar ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Producto</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Compañía</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Carreras
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Comunidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 7hoSoft. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

const plans = [
  {
    name: "Básico",
    price: "29",
    features: ["Hasta 5 usuarios", "Analítica básica", "Soporte por email", "1 proyecto", "Almacenamiento 10GB"],
  },
  {
    name: "Pro",
    price: "99",
    features: [
      "Usuarios ilimitados",
      "Analítica avanzada",
      "Soporte prioritario 24/7",
      "Proyectos ilimitados",
      "Almacenamiento 100GB",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "299",
    features: [
      "Todo lo de Pro",
      "Servidor dedicado",
      "Account Manager",
      "Personalización total",
      "SLA garantizado",
      "Backups diarios",
    ],
  },
]

