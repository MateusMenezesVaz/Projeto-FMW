import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const contacts = [
  {
    name: 'John Doe',
    number: '+55 (81) 99527-8647',
    profileImage: 'https://oroborendaextra.com.br/wp-content/uploads/2022/01/esta-pessoa-nao-existe-engenharia360-4.png',
  },
  {
    name: 'Jane Smith',
    number: '+55 (81) 98646-5673',
    profileImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.utnTDgZPWDpIXSqqIpf3egHaHb%26pid%3DApi&f=1&ipt=078e5765117b4fdff6103ed25a49a196cc35c3318fe07d8467d42cb58e4791b2&ipo=images',
  },
  {
    name: 'Mike Johnson',
    number: '+55 (81) 97545-2324',
    profileImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F474x%2F76%2Fb2%2F79%2F76b2799fcd3c8b77e6e0e83a98af8657.jpg&f=1&nofb=1&ipt=988581183b816bfb8e44ebf0f481855abaa868755d1bc3ccb209125f72e76c07&ipo=images',
  },
  {
    name: 'Emily Davis',
    number: '+55 (81) 99547-7678',
    profileImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F21%2Ff0%2F7c%2F21f07cf2b6019e4c65e5435c59c605c9.jpg&f=1&nofb=1&ipt=3ba6634a5fa9c17d9a0431ecdca6254b88ec8bd64e028aee57a2a77c27564b03&ipo=images',
  },
  {
    name: 'David Brown',
    number: '+55 (81) 98646-3435',
    profileImage: 'https://secinfinity.net/wp-content/uploads/2019/09/1569071835_430_Genius-AI-erschafft-unheimlich-naturgetreue-menschliche-Gesichter-aber-keiner.jpg?strip=all&w=960',
  },
  {
    name: 'Alice Johnson',
    number: '+55 (81) 97545-1234',
    profileImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F34%2F97%2F5d%2F34975d73062c449a3bc0b3055146caac.jpg&sp=1701307046Tdd0685f2084a56ee7cc6311432f4c2b410e1b8b64a037ff229c9d33ed3e8d9d5',
  },
  {
    name: 'Bob Smith',
    number: '+55 (81) 98646-5678',
    profileImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F98%2F43%2F1a%2F98431a96f44d5e42094cab4db691901a.jpg&sp=1701307609Tf6f5b50acfc2131f31f5d84ec4d0c9980201dd88c1ba2873cc02c9c5b138b36e',
  },
  {
    name: 'Carol Davis',
    number: '+55 (81) 99547-8765',
    profileImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Y-H1GVdx6_4YN2cZrtCtZQHaF-%26pid%3DApi&sp=1701307137T803ad925a276199848817a0cd156176a9617e145a8d773b75411432b8a32a722',
  },
  {
    name: 'Daniel Rodrigues',
    number: '+55 (81) 98646-9876',
    profileImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.9cAq2MM0aRIrm-LQO9A0bAHaHa%26pid%3DApi&sp=1701307481Tb06b9bdb85472b92f68925a24a4abe844e60466e166e386aa83139d440edf0e9',
  },
  {
    name: 'Fernando Sobral',
    number: '+55 (81) 98646-9876',
    profileImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jIlmlKHuKhl-W3-BECe8jQHaIs%26pid%3DApi&sp=1701307481T1adb49427f58866e2daf4efbb863c6a2e8af7a49e0734ea150ac9aa0af6b81cf',
  },
  {
    name: 'Erika Fonseca',
    number: '+55 (81) 98646-9876',
    profileImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0LK2-et-VfEUXk25nqAqXgHaHa%26pid%3DApi&sp=1701307481T28e059cf33c1843f381e4288db289abf348515522f0c422aa18eb465a61205e4',
  },
  {
    name: 'Leandro da Silva',
    number: '+55 (81) 98646-9876',
    profileImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.owYmGal4_fOQ9usF8xl66AHaHV%26pid%3DApi&sp=1701307481T6b723e5cd54be65930f1fcf64ddf4a5577d75b8255765fa191bb35bffe3dfc68',
  },
  {
    name: 'Henrique Nunes',
    number: '+55 (81) 98646-9876',
    profileImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F27%2F60%2F6e%2F27606ed6361e098cd062c234f47e60b6.jpg&sp=1701307429T8162bc50386205a112a8ef6a8f13509db5921d1209007eb69398f6420642d906',
  },{
    name: 'Isabella Cabral',
    number: '+55 (81) 98646-9876',
    profileImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1288733.jpg&sp=1701307229Tede80dc6b9e4f11af845da7b19a42b97add1b70fff7c61ba1b0037ebbb7aaf0b',
  },{
    name: 'Larissa Ramos',
    number: '+55 (81) 98646-9876',
    profileImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.DHMXQHGXQFbkatbbnt6jWQHaHb%26pid%3DApi&sp=1701307481Tdcec04dec5d9d047e43d968515663fabebdb5859ac0ee911a0894ae6668f0fd2',
  },{
    name: 'Jose Velasquez',
    number: '+55 (81) 98646-9876',
    profileImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd3%2F33%2Ff0%2Fd333f0caa9e0e22a1585ff4482cd1d27.jpg&sp=1701307299Ta4ba2b2ad26ba9e33e43f196cd0de4885c05f03647e01fe6cffe9b343dec5c64',
  },
];

const ContactScreen = () => {
  const handleContactPress = (contact) => {
    console.log('Contact Pressed:', contact);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {contacts.map((contact, index) => (
          <TouchableOpacity
            key={index}
            style={styles.contactContainer}
            onPress={() => handleContactPress(contact)}
          >
            <Image source={{ uri: contact.profileImage }} style={styles.profileImage} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactNumber}>{contact.number}</Text>
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
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 16,
    color: '#888',
  },
});

export default ContactScreen;


