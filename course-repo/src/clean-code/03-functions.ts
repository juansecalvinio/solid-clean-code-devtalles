(() => {
  // función para obtener información de una película por Id
  // function getAllMovies(movieId: string) {
  //   console.log({ movieId });
  // }
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  // function getAllMovieActors(id: string) {
  //   console.log({ id });
  // }
  function getMovieCast(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  // function getUsuario(ActorId: string) {
  //   console.log({ ActorId });
  // }
  function getBioById(actorId: string) {
    console.log({ actorId });
  }

  // Crear una película
  // function movie(
  //   title: string,
  //   description: string,
  //   rating: number,
  //   cast: string[]
  // ) {
  //   console.log({ title, description, rating, cast });
  // }
  interface CreateMovieProps {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }
  function createMovie({ title, description, rating, cast }: CreateMovieProps) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  // function createActorIfActorNotExists(
  //   fullName: string,
  //   birthdate: Date
  // ): boolean {
  //   // tarea asincrona para verificar nombre
  //   // ..
  //   // ..
  //   if (fullName === "fernando") return false;

  //   console.log("Crear actor");
  //   return true;
  // }
  function checkName(name: string): boolean {
    if (name === "fernando") return false;
    return true;
  }
  function createActor(name: string, birthdate: Date): boolean {
    if (!checkName(name)) return false;
    console.log("Actor created successfully", { name, birthdate });
    return true;
  }
})();
