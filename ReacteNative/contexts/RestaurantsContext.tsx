
import React from 'react';
import { RestaurantProps } from '../components/RestautantInfo';


const initRestaurantState={
    restaurants : [ {
        name: "New Jawad", 
        image:"https://media-cdn.tripadvisor.com/media/photo-s/1b/7c/b0/43/new-jawad-longchamp-finesse.jpg",
        description : "Currys végétariens et à la viande, plats tandoori classiques et biryanis servis dans un restaurant chic doté d'une terrasse"

    },
    {
        name: "L'oiseau Blanc", 
        image:"https://res.cloudinary.com/tf-lab/image/upload/w_1200,h_674,c_fill,q_auto,f_auto/restaurant/7733e606-ca2c-4b7f-a527-2af16ba5adc5/bc005b30-35b6-4c8e-807b-c99e3933e652.jpg",
        description : "Le restaurant et sa terrasse Rooftop offrent une vue panoramique imprenable sur les plus célèbres monuments de la capitale.Ici est célèbré l’esprit d’aventure des deux pionniers français de l’aviation : Charles Nungesser et François Coli, qui ont été les premiers à tenter la traversée de l’Atlantique sans escale à bord du biplan. La réplique de l’avion original - présentant une envergure de 11 mètres – est suspendue dans les airs, « en plein vol » en direction de la Tour Eiffel.C’est dans ce décor unique que l'équipe de L'Oiseau Blanc vous accueille pour un des voyages culinaires les plus prometteurs de la Ville Lumière."

    },
    {
        name: "Meriggio", 
        image:"https://res.cloudinary.com/tf-lab/image/upload/w_1200,h_674,c_fill,q_auto,f_auto/restaurant/3d8083fe-b11c-4bf3-8ecb-3e4749caec5f/9364ff48-b1a5-4edd-b3ae-586ce321bb92.jpg",
        description : "Restaurant élégant doté d'une façade en verre et d'une terrasse, servant des pâtes traditionnelles et des plats principaux italiens."

    },
    {
        name:"Noix de Saint-Jacques flambées au cognac",
        image:"",
        description:"Faire fondre du beurre avec des échalotes puis ajouter les noix de Saint-Jacques. Les faire revenir en laissant le milieu translucide puis les retirer du feu. Ajouter l'ail et le persil dans la poêle et laisser cuire quelques secondes. Bien faire chauffer la poêle, puis flamber au Cognac. Une fois la flamme éteinte, ajouter les noix de Saint-Jacques (il ne faut pas les flamber car elles perdraient leur saveur). Déguster chaud nature ou accompagné d'une fondue de poireaux",
    },
    {
        name:"Tourteau linguine",
        description:"Qu'il est chaud le soleil Quand nous sommes en vacances Y a d' la joie, des hirondelles C'est le sud de la France Papa bricole au garage Maman lit dans la chaise longue Dans ce joli paysage Moi, je me balade en tongs Que de bonheur! Que de bonheur!",
        image:""
    }]

}
const restaurantContextWrapper = (component ? : React.Component)=>({
 ...initRestaurantState ,
 addContact:(restaurant: RestaurantProps)=>{
    initRestaurantState.restaurants= [...initRestaurantState.restaurants, restaurant];
    component?.setState({ context: restaurantContextWrapper(component) });
}

});

type Context = ReturnType<typeof restaurantContextWrapper>;
export const RestaurantsContext = React.createContext<Context>(restaurantContextWrapper());

interface State {
  context: Context;
}

export class RestaurantContextProvider extends React.Component<{children?: React.ReactNode;}, {}> {
    state: State = {
      context: restaurantContextWrapper(this),
    }
}