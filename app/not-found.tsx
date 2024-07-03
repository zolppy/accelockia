import Container from "./components/generic/Container";

export default function Custom404() {
  return (
    <>
      <Container>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-center">
          <span className="text-6xl md:text-7xl lg:text-9xl">404</span>
          <span className="text-xl md:text-2xl lg:text-4xl whitespace-nowrap">
            Página não encontrada
          </span>
        </div>
      </Container>
    </>
  );
}
