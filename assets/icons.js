import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export const icons = {
    index: (props)=> <Feather name="home" size={26} {...props} />,
    explore: (props)=> <Feather name="compass" size={26} {...props} />,
    create: (props)=> <MaterialCommunityIcons name="cards" size={26} {...props} />,
    profile: (props)=> <MaterialIcons name="person-pin" size={26} {...props} />,
}