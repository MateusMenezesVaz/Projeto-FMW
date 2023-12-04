import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const Wallet = () => {
  const cryptocurrencies = [
    { name: 'Bitcoin', balance: 0.5, price: 50000, variation: '+5.2%', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=002' },
    { name: 'Ethereum', balance: 2.3, price: 3000, variation: '-2.7%', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=002' },
    { name: 'Litecoin', balance: 10.8, price: 150, variation: '+1.4%', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Litecoin.svg/2500px-Litecoin.svg.png' },
    { name: 'Creal', balance: 100, price: 1, variation: '-1.0%', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTbpUSNCKsyjguF_dNllpoJnvEvfqV9jUkvWalV6Ajmu0zep0NCQwI_eI4Y0lkf9_Xc&usqp=CAU' },
    { name: 'Tether', balance: 500, price: 1, variation: '+0.5%', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=002' },
    { name: 'Bitcoin Cash', balance: 5, price: 300, variation: '-3.0%', icon: 'https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=002' },
    { name: 'Zcash', balance: 50, price: 200, variation: '+2.5%', icon: 'https://cryptologos.cc/logos/zcash-zec-logo.png?v=002' },
    { name: 'Dash', balance: 20, price: 100, variation: '-1.8%', icon: 'https://cryptologos.cc/logos/dash-dash-logo.png?v=002' },
    { name: 'BNB', balance: 30, price: 400, variation: '+3.0%', icon: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png' },
    { name: 'Solana', balance: 15, price: 150, variation: '+4.2%', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
    { name: 'XRP', balance: 1000, price: 0.8, variation: '-0.5%', icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
    { name: 'USDC', balance: 10000, price: 1, variation: '+0.2%', icon: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png' },
    { name: 'Cardano', balance: 200, price: 2, variation: '+1.5%', icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
  ];

  const handleCryptoPress = (crypto) => {
    console.log('Cryptocurrency Pressed:', crypto.name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet</Text>
      <ScrollView>
        {cryptocurrencies.map((crypto) => (
          <TouchableOpacity
            style={styles.cryptoContainer}
            key={crypto.name}
            onPress={() => handleCryptoPress(crypto)}
          >
            <View style={styles.iconContainer}>
              {crypto.icon.includes('.svg') ? (
                <Image source={{ uri: crypto.icon }} style={{ width: 24, height: 24 }} />
              ) : (
                <Image source={{ uri: crypto.icon }} style={{ width: 24, height: 24, borderRadius: 12 }} />
              )}
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.cryptoName}>{crypto.name}</Text>
              <Text style={styles.cryptoBalance}>
                {crypto.balance}{' '}
                {crypto.name === 'Bitcoin'
                  ? 'BTC'
                  : crypto.name === 'Ethereum'
                  ? 'ETH'
                  : crypto.name === 'Tether'
                  ? 'USDT'
                  : crypto.name === 'Bitcoin Cash'
                  ? 'BCH'
                  : crypto.name === 'Zcash'
                  ? 'ZEC'
                  : crypto.name === 'Dash'
                  ? 'DASH'
                  : crypto.name === 'BNB'
                  ? 'BNB'
                  : crypto.name === 'Solana'
                  ? 'SOL'
                  : crypto.name === 'XRP'
                  ? 'XRP'
                  : crypto.name === 'USDC'
                  ? 'USDC'
                  : crypto.name === 'Cardano'
                  ? 'ADA'
                  : 'CR' /* Adapte conforme necessário */}
              </Text>
              <Text style={styles.cryptoPrice}>Price: ${crypto.price}</Text>
              <Text style={styles.cryptoVariation}>Variation: {crypto.variation}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  cryptoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E7E7E7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    marginLeft: 16,
  },
  cryptoName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cryptoBalance: {
    fontSize: 16,
    color: '#777',
  },
  cryptoPrice: {
    fontSize: 14,
    color: '#999',
  },
  cryptoVariation: {
    fontSize: 14,
    color: '#2ECC71',
  },
});

export default Wallet;






