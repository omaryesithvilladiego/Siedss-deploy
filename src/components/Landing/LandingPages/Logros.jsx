import estilos from './logros.module.css'

function Logros() {

    const data = [
        {
            id:1,
            image:`` ,
            tittle: 'Logros',
            description: 'Logros destacados del Semillero de Investigación SIEDSS: Impulsando la innovación y el conocimiento'
        },
        {
        id:2,
        image: `${estilos.image1} ${estilos.image}`,
        tittle: 'Electiva Emprendimiento, digital, social y solidario',
        description: 'Desarrollar una estrategia de Formación en Emprendimiento digital, social y solidario - Metodologías activas y el modelo crítico con enfoque por competencias.'
    },
    {
        id:3,
        image:`${estilos.image2} ${estilos.image}`,
        tittle: 'BEIES - Banco de Experiencias Institucionales ES',
        description: 'Banco de experiencias institucionales que recopila casos de éxito en emprendimiento y desarrollo social para su difusión y aprendizaje.'
    },{
        id:4,
        image:`${estilos.image3} ${estilos.image}`,
        tittle: '19 Reconocimientos',
        description: 'Reconocimientos obtenidos en diversos ámbitos por destacados logros y contribuciones en emprendimiento, investigación y formación..'
    },{
        id:5,
        image:`${estilos.image4} ${estilos.image}`,
        tittle: '2 artículos Científicos - Capitulo libro',
        description: 'Publicación de dos artículos científicos en un libro, aportando conocimientos e investigaciones relevantes en su área.'
    },
//     {
//       id:5,
//       image:'image5 image',
//       tittle: '10 ponencias',
//       description: ' Participación en conferencias y charlas para compartir conocimientos y experiencias en emprendimiento, investigación y desarrollo social.'
//   }
]





    return ( 
    <>
     <div
        style={{
          
          width: "100%",
          height: "100%",
        }}
      >
      
        <div className={estilos.containerLogros}>
          <div className={estilos.containerBoxes}>

            {data.map(object => (
                <div key={object.id} className={`${estilos.box}`}>
              <div className={object.image}></div>
              <div className={estilos.textLogro}>
                <h3 className={estilos.tittleLogro}> {object.tittle} </h3>
                <p className={estilos.descriptionLogro}> {object.description} </p>
              </div>
            </div>
            ))}
            
              
            </div>

          </div>

        </div>

    </>);
}

export default Logros;