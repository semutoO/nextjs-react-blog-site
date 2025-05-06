import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">          
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">          
            <a
              href={`https://github.com/semutoO/nextjs-react-blog-site`}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 font-bold hover:underline inline-flex items-center"
            >
              View a template of this website's React code on GitHub
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
