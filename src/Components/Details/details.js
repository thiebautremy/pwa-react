import React from "react";
import "./details.css";
import Fade from "react-reveal/Fade";
import trailPath from "../../assets/posters/trailPath.webp";

const Details = () => {
  return (
    <div className="details">
      {trailPath && (
        <Fade bottom>
          <img src={trailPath} alt="Trail Path" />
          <article>
            <div className="detailLux">
              <p>
                Der 90 Kilometer lange Minett Trail ist ein Etap penwanderweg
                und verläuft quer durch die Minett Region und verbindet auf
                seinem Ver lauf verschiedene Wanderhighlights. Sie können den
                Trail problemlos in weniger oder mehr als 10 Etappen erwandern.
                Durch die verschiedenen Einund Ausstiegsmöglichkeiten können Sie
                ihr eigenes Abenteuer flexibel planen.
              </p>
              <p>
                Der Trail ist im Rahmen der Kandidatur für das Label der „Minett
                Unesco Biosphäre“ (MUB) entstanden. Eines der Hauptziele war es,
                unsere außergewöhnlichen Naturlandschaften und das industrielle
                Erbe so aufzubereiten und zu inszenieren, dass es zu einem
                besonderen touristischen Produkt wird für das es sich lohnt die
                Südregion zu besuchen.
              </p>
              <p>
                Im Hinblick auf Esch 2022, die Europäische Kulturhauptstadt, hat
                sich die Gelegenheit geboten größer zu denken. Entstanden ist
                also über die Zeit der Minett Trail der zusätzlich in den 11
                Esch 2022 Gemeinden außergewöhnliche Schlafmöglichkeiten bieten
                soll – in ehemaligen Industriegemäuern, leerste henden Hütten
                usw. Die 11 Herbergen sollten zu architektonischen Kunstwerken
                werden.
              </p>
              <p>
                Ziel war es, dass die ersten Wanderer ab 2022 in den
                „Kabaisercher“ übernachten können und sich von der Wanderung
                quer durch die Minett Region erholen können.
              </p>
            </div>
            <div className="detailFrench">
              <p>
                Le Minett Trail est un chemin de randonnée de 90 km qui traverse
                la région du Minett et qui relie plusieurs points d'intérêt.
                Vous pouvez parcourir le Minett Trail selon vos envies, y
                compris en prévoyant moins ou plus de dix étapes. Comme le
                sentier propose plusieurs points de départ et d’arrivée, vous
                pouvez planifier votre aventure comme vous le souhaitez.
              </p>
              <p>
                L'idée du trail a été élaboré dans le cadre de la candidature au
                label de la « Minett Unesco biosphere » (MUB). L'un des
                principaux objectifs était de préparer et de mettre en scène nos
                paysages naturels exceptionnels et notre patrimoine industriel
                de manière à en faire un produit touristique particulier pour
                lequel il vaut la peine de visiter la région du sud.
              </p>
              <p>
                Dans la perspective d'Esch 2022, Capitale européenne de la
                Culture, l'occasion s'est présentée de penser plus grand!
              </p>
              <p>
                C'est ainsi que, dans le cadre de l’élaboration du Minett Trail,
                des possibilités d’hébergement exceptionnelles ont été créées
                dans les 11 communes d'Esch 2022 dans d'anciens bâtiments
                industriels, des usines vides, etc. Les 11 gîtes ont vocation à
                devenir des œuvres d'art architecturales.
              </p>
              <p>
                L'objectif était d’accueillir les premiers randonneurs dans les
                « Kabaisercher » à partir de 2022 pour qu’ils puissent se
                reposer de leur randonnée à travers la région de la Minette.
              </p>
            </div>
            <div className="detailEnglish">
              <p>
                The Minett Trail, a 90 km-long itinerary that runs through the
                Minett region, connecting various hiking highlights. You can
                easily hike the Minett Trail by dividing your walk into
                approximately ten stages. The numerous points of entry to the
                paths allow for great flexibility when you plan your adventure.
              </p>
              <p>
                The ‘Minett Trail’ was planned as part of the region’s
                application for the ‘Minett UNESCO Biosphere’ (MUB) label. One
                of its main objectives was to showcase the extraordinary natural
                landscapes and industrial heritage of the south of Luxembourg to
                make it appealing to visitors.
              </p>
              <p>
                However, seeing the wealth of opportunity in the fact that Esch
                was to be the European Capital of Culture in 2022, we decided to
                go beyond designing a basic hiking route to implement novel
                ideas.
              </p>
              <p>
                As a result, original accommodation opportunities were created
                so that hikers on the Minett Trail could spend the night in any
                of the eleven communes participating in ‘Esch 2022’.
              </p>
              <p>
                The ‘Kabaisercher’ were scheduled to open their doors in 2022.
              </p>
            </div>
          </article>
          <p>© OAI 05/2022</p>
        </Fade>
      )}
    </div>
  );
};

export default Details;
