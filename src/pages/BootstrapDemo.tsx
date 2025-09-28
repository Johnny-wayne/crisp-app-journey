// Página de demonstração da migração gradual para Bootstrap
import { Card as BootstrapCard, CardContent as BootstrapCardContent, CardTitle as BootstrapCardTitle, CardHeader as BootstrapCardHeader } from '../components/ui/bootstrap';
import { Card as TailwindCard, CardHeader as TailwindCardHeader, CardContent as TailwindCardContent, CardTitle as TailwindCardTitle } from '../components/ui/card';

export default function BootstrapDemo() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Migração Gradual: Tailwind → Bootstrap</h1>
      
      <div className="row">
        <div className="col-md-6">
          <h2 className="h4 mb-3">Componente Bootstrap</h2>
          <BootstrapCard>
            <BootstrapCardHeader>
              <BootstrapCardTitle>Card com Bootstrap</BootstrapCardTitle>
            </BootstrapCardHeader>
            <BootstrapCardContent>
              <p>Este card está usando o React Bootstrap e CSS do Bootstrap 5.</p>
              <button className="btn btn-primary">Botão Bootstrap</button>
            </BootstrapCardContent>
          </BootstrapCard>
        </div>
        
        <div className="col-md-6">
          <h2 className="h4 mb-3">Componente Tailwind</h2>
          <TailwindCard>
            <TailwindCardHeader>
              <TailwindCardTitle>Card com Tailwind</TailwindCardTitle>
            </TailwindCardHeader>
            <TailwindCardContent>
              <p>Este card ainda está usando o Tailwind CSS.</p>
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium">
                Botão Tailwind
              </button>
            </TailwindCardContent>
          </TailwindCard>
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="h5">Status da Migração</h3>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Dependências Bootstrap
            <span className="badge bg-success rounded-pill">✓ Instalado</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Componentes Card e Button
            <span className="badge bg-success rounded-pill">✓ Migrado</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Sistema de Grid
            <span className="badge bg-warning rounded-pill">Em Uso</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Todas as Páginas
            <span className="badge bg-secondary rounded-pill">Pendente</span>
          </li>
        </ul>
      </div>
    </div>
  );
}