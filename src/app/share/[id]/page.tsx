import { Metadata, ResolvingMetadata } from 'next';
import { getAuditById } from '@/app/actions/saveAudit';
import AuditResultsDashboard from '@/components/AuditResultsDashboard';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const p = await params;
  const id = p.id;

  const audit = await getAuditById(id);

  if (!audit) {
    return {
      title: 'Audit Not Found - AI Spend Audit',
    };
  }

  const title = `We can save $${audit.totalAnnualSavings.toLocaleString()}/year on AI Spend`;
  const description = 'Check out this anonymous audit result and see how much you could save by optimizing your AI tool stack.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: `/api/og?savings=${audit.totalAnnualSavings}`,
          width: 1200,
          height: 630,
          alt: 'AI Spend Savings',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/api/og?savings=${audit.totalAnnualSavings}`],
    },
  };
}

export default async function SharePage({ params }: Props) {
  const p = await params;
  const id = p.id;
  const audit = await getAuditById(id);

  if (!audit) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-emerald-500/30">
      {/* We can reuse the AuditResultsDashboard but pass a dummy onReset since they can't reset a shared view. 
          Alternatively, redirect them to the home page if they want to do their own. */}
      <AuditResultsDashboard 
        result={audit} 
        onReset={() => {
          if (typeof window !== 'undefined') {
            window.location.href = '/';
          }
        }} 
      />
    </div>
  );
}
