// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Empieza la tarde de viernes</h1>\
        <p>Empezaba el fin de semana y como era normal Ana siempre volvia a casa los viernes\
       vive fuera durante la semana y cada viernes cuando termina las clases se va a su casa con su familia\
        Nunca le habia pasado nada fuera de lo normal, pero,casi llegando a casa, el coche empezó a hacer cosas extrañas,\
         por lo que paró en el andén y al bajarse se dió cuenta de que tenia una rueda pinchada.\
       Miró el movíl corriendo para llamar a la grúa, pero se llevó la sorpresa de que estaba apagado.\
       No se acordaba de que no lo puso a cargar antes de salir de casa. En ese momento no sabia que hacer estaba muy nerviosa,\
      estaba lloviendo, estaba en mitad de la carretera y no podía avisar a nadie para que fuera a ayudarla.\
      Ahora vamos a plantear tres opciones posibles que puede hacer Ana.\
      <a href='autostop'>Autostop</a>\
       Es una opcion pelogrosa pero podría servirle de ayuda.</p>"
    ),


    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
    autostop: new undum.SimpleSituation(
        "<p>Esta es una opción un poco peligrosa para Ana pero, es la que primero piensa,ya que no sabe muy bien que hacer,porque no tiene movíl.\
        si hace autostop se arriesga a que la persona que pare no la ayude y sea para hacerle algo malo, o si que puede que le ayude\
        Es algo arriesgado y no se atreve, por eso piensa en <a href='arcen'> Arcen</a>\
         </p>",
         {
            heading: "autostop",
            diplayOrder: 2,
            tags: ["topic"]
        }
),
arcen: new undum.SimpleSituation(
        "<p>Andar por la carretera puede ser muy peligroso para cualquiera,\
        pero Ana está desesperada y se le a ocurrido andar hasta encontrar la via de servicio mas cercana\
        para poder conseguir un teléfono o pedir ayuda\
        Continuando la noche, llega un momento en el que te proponen si ir a <a href='intentarcambiarsolalarueda'>cambiar la rueda ella sola </a>.\
         </p>",
         {
            heading: "andar por el arcen",
            diplayOrder: 2,
            tags: ["topic"]
        }
),
intentarcambiarsolalarueda: new undum.SimpleSituation(
        "<p>El padre de Ana de pequeña le enseñó a cambiar una rueda y ella pensó en intentar cambiarla ella sola para poder\
        seguir con el camino,era algo bastante peligroso támbien porque podria ser atropellada ya que los coches pasan con mucha velocidad\
        <a href='esperarasufamilia'>Esperar que alguien la busque</a>\
        </p>",
         {
            heading: "cambiar la rueda ella sola",
            diplayOrder: 2,
            tags: ["topic"]
        }
),
esperarasufamilia: new undum.SimpleSituation(
        "<p>También podría esperar a que sus padres se den cuenta de que no llega a casa\
        y salgan a buscarla por el camino, algo que sería mala idea porque no sabe cuanto tiempo tardarían sus padres en echarla en falta.\
         <a href='cargador'>buscar un cargador</a>\
         </p>",
         {
            heading: "esperar que sus padres la busquen",
            diplayOrder: 2,
            tags: ["topic"]
        }
),
cargador: new undum.SimpleSituation(
        "<p>buscar en el coche a ver si tiene algun cargador para el mechero\
        sería también peligroso permanecer dentro del coche\
        <a href='salirse'>Salirse del coche</a>\
         </p>",
         {
            heading: "buscar un Cargador",
            diplayOrder: 2,
            tags: ["topic"]
        }
),
salirse: new undum.SimpleSituation(
        "<p>Finalmente la ultima opcion es salirse del coche y de la carretera, ponerse en un sitio seguro y esperar a que pase el tiempo y se dé alguna\
        de las opciones anteriores\
         </p>\
         <h1> Fin </h1>"
         ,
         {
            heading: "salirse del coche y esperar",
            diplayOrder: 2,
            tags: ["topic"]
        }
)
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Autostop", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Arcen", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>Pensamientos que tiene Ana en cada situacion.</p>");
};
