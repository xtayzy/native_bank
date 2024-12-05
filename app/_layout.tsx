import {Stack, Tabs} from "expo-router";

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "989da8",
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Главная"
                }}
            />
            <Tabs.Screen
                name="screens/account"
                options={{
                    title: "Счет"
                }}
            />
            <Tabs.Screen
                name="screens/profile"
                options={{
                    title: "Профиль"
                }}
            />
        </Tabs>
    )
}
