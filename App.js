import "@walletconnect/react-native-compat";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WagmiConfig } from "wagmi";
import { mainnet, polygon, arbitrum } from "viem/chains";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
} from "@web3modal/wagmi-react-native";
import Home from "./screens/Home";
import ProfileScreen from "./screens/ProfileScreen";
import CreateScreen from "./screens/CreateScreen";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "4693d02b88d3b23c6d072f0e071c86f5";

// 2. Create config
const metadata = {
  name: "Web3Modal RN",
  description: "Web3Modal RN Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const chains = [mainnet, polygon, arbitrum];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Home />
      {/* <ProfileScreen/> */}
      {/* <CreateScreen/> */}
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>

        <StatusBar style="auto" />
      </View> */}

      <Web3Modal />
    </WagmiConfig>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
