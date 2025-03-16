import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Eye, Award, Briefcase } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: "Ana Rodríguez",
      position: "Fundadora y CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Carlos Méndez",
      position: "Director de Diseño",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Laura Sánchez",
      position: "Directora de Marketing",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "Miguel Torres",
      position: "Director de Operaciones",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Nuestra Historia
              </h1>
              <p className="text-lg text-muted-foreground">
                Moonlight Workspace nació de la pasión por crear espacios de trabajo que inspiren creatividad y productividad. Fundada en 2020, nuestra misión es transformar espacios ordinarios en ambientes funcionales y estéticamente agradables.
              </p>
            </div>
            <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1600494603989-9650cf6dad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Equipo de Moonlight Workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-full mr-4 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Misión</h2>
                </div>
                <p className="text-muted-foreground">
                  Transformar espacios de trabajo ordinarios en ambientes altamente productivos y estéticamente agradables, satisfaciendo las necesidades específicas de freelancers, trabajadores remotos y estudiantes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-full mr-4 text-primary">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Visión</h2>
                </div>
                <p className="text-muted-foreground">
                  Ser la marca líder en soluciones de diseño y organización de espacios de trabajo, reconocida por la innovación y la comprensión profunda de las necesidades de la nueva generación de profesionales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Nuestro Público</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diseñamos nuestros productos pensando en las necesidades específicas de:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Briefcase className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Freelancers</h3>
                <p className="text-sm text-muted-foreground">
                  Profesionales independientes que buscan optimizar su espacio de trabajo para maximizar su productividad.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Trabajadores Remotos</h3>
                <p className="text-sm text-muted-foreground">
                  Profesionales que necesitan crear un ambiente de oficina funcional en su hogar.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Award className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Estudiantes</h3>
                <p className="text-sm text-muted-foreground">
                  Jóvenes que buscan crear espacios de estudio eficientes y estéticamente agradables.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Briefcase className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Profesionales Creativos</h3>
                <p className="text-sm text-muted-foreground">
                  Diseñadores, artistas y creativos que valoran tanto la estética como la funcionalidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Nuestro Equipo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce a las personas apasionadas que hacen posible Moonlight Workspace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}