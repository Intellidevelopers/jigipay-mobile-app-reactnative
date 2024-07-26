import { Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export const icons = {
    index: (props)=> <Feather name="home" size={26} {...props} />,
    explore: (props)=> <Feather name="compass" size={26} {...props} />,
    create: (props)=> <MaterialCommunityIcons name="cards" size={26} {...props} />,
    budget: (props)=> <FontAwesome name="codiepie" size={26} {...props} />,
}