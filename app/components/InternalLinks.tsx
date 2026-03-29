interface LinkItem {
  title: string;
  href: string;
  description: string;
}

export default function InternalLinks({ title = 'Mohlo by vás zajímat', links }: { title?: string; links: LinkItem[] }) {
  if (!links.length) return null;

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group block p-6 bg-white border border-gray-200 rounded-card hover:border-primary hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                {link.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">{link.description}</p>
              <span className="mt-3 inline-flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Zjistit více →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
