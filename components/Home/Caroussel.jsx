import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../helper/constants'
import styles from './Caroussel.style'


const Caroussel = () => {
  const slides = [
    "https://www.meublesatlas.fr/modules/ph_simpleblog/featured/95.jpg",
    "https://www.rueducommerce.fr/media/produits/ahd-amazing-home-design/buffet-de-salon-en-bois-design-4-portes-3-tiroirs-220cm-gris-5552114-274503158_3158_500x500.jpeg",
    "https://www.rueducommerce.fr/media/produits/ahd-amazing-home-design/buffet-moderne-200x43cm-meuble-de-salon-4-pieces-de-cuisine-5555238-274518038_8038_500x500.jpeg",
    "https://vintekk.ma/cdn/shop/products/Meuble_TV_Payara_Achetez_vos_meubles_en_ligne_sur_home24___une_grande_selection_de_produits_livres_gratuitement_a_votre_domicile_-_partout_en_Belgique.jpg?v=1655877220",
    "https://cdn02.plentymarkets.com/46gelrxs6k5l/item/images/29606/secondPreview/29606-TV-Board-Eloi-240x35x48-cm-Akazie-Braun-3-Schubfaecher-V-Fuss_5.jpg"
  ]
  return (
    <View style ={styles.container} >
        <SliderBox 
            images={slides}
            autoplay
            circleLoop
            dotColor={COLORS.primary}
            inactiveDotColor = {COLORS.secondary}
            ImageComponentStyle = {{borderRadius:15, width:"95%", marginTop:15}}
        />
    </View>
  )
}

export default Caroussel