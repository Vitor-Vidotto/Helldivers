import Typewriter from 'typewriter-effect';

const TypewriterLoop = () => {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        pauseFor: 2500,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('We are <span style="color:rgb(241, 174, 50);">Conquerors!</span>')
          .pauseFor(1500)
          .deleteChars(11) // Deleta apenas a parte "Programador"
          .typeString('<span style="color:rgb(255, 126, 51);">Exterminators!</span>')
          .pauseFor(1500)
          .deleteChars(14) // Deleta apenas a parte "Desenvolvedor"
          .typeString('<span style="color: #f13232;;">DIVERS!</span>')
          .pauseFor(1500)
          .deleteChars(7) // Deleta apenas a parte "DevOps"
          .start();
      }}
      style={{ display: 'inline' }}
    />
  );
};

export default TypewriterLoop;
