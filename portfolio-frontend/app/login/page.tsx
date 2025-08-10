import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Container from "../components/Container";
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  return (
    <>
      <Background />
      <Navbar />
      <section className="py-16">
        <Container>
          <AuthForm variant="login" />
        </Container>
      </section>
    </>
  );
}