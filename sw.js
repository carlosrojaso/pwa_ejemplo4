importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/bundle.js",
    "revision": "8d4c826269b343d1f1a07b24364646c0"
  },
  {
    "url": "css/styles.css",
    "revision": "b94818ff30854ab6e14547a3a7d3ae53"
  },
  {
    "url": "images/apple-touch-icon-precomposed.png",
    "revision": "09c7f3ae7782164c586a9dd00309593d"
  },
  {
    "url": "images/emoji/archive/1f32a.svg",
    "revision": "70828c3565d5734a2a44337a6b1f73b5"
  },
  {
    "url": "images/emoji/archive/1f32b.svg",
    "revision": "31a91a271e9e5376078d0f2abfcccd99"
  },
  {
    "url": "images/emoji/archive/1f32f.svg",
    "revision": "925fa7d2bacd5f89bdf2fb4e1a686a2e"
  },
  {
    "url": "images/emoji/archive/1f332.svg",
    "revision": "7e4e723761c8294d6c5dc316a0c81b50"
  },
  {
    "url": "images/emoji/archive/1f333.svg",
    "revision": "012fd6e61ea446d6a416aded178c3e26"
  },
  {
    "url": "images/emoji/archive/1f334.svg",
    "revision": "8185a11352c6c36f55a43941a72e1aac"
  },
  {
    "url": "images/emoji/archive/1f336.svg",
    "revision": "aa50f74de7e09fa57509a5315dcdc405"
  },
  {
    "url": "images/emoji/archive/1f337.svg",
    "revision": "279a0f16431a7f689e131455967edb96"
  },
  {
    "url": "images/emoji/archive/1f339.svg",
    "revision": "42caf7acae807ff5460ef7360fea84a3"
  },
  {
    "url": "images/emoji/archive/1f33c.svg",
    "revision": "cac355feed24fd070e93daa9bb2be847"
  },
  {
    "url": "images/emoji/archive/1f345.svg",
    "revision": "75050294bf32362e004d7cbaacda4a3a"
  },
  {
    "url": "images/emoji/archive/1f346.svg",
    "revision": "f17d34b14292bd00ae54cd717907da12"
  },
  {
    "url": "images/emoji/archive/1f347.svg",
    "revision": "80f5ff72b3f44e5d8ccbd0de9fdec21d"
  },
  {
    "url": "images/emoji/archive/1f349.svg",
    "revision": "ae1da3528e905d969f1db7d1592a8d36"
  },
  {
    "url": "images/emoji/archive/1f34a.svg",
    "revision": "aef0d53d86c1554e2c1c2e0aa0f26c28"
  },
  {
    "url": "images/emoji/archive/1f34b.svg",
    "revision": "ffec4ce903dd92602d97ff6e3120036b"
  },
  {
    "url": "images/emoji/archive/1f34d.svg",
    "revision": "eb2f27b2a4682d7ff371af78905ff37d"
  },
  {
    "url": "images/emoji/archive/1f34e.svg",
    "revision": "f9c267ef6caccd6b992bd5fe504da434"
  },
  {
    "url": "images/emoji/archive/1f350.svg",
    "revision": "bd5602804842e970585f160a39e043e1"
  },
  {
    "url": "images/emoji/archive/1f352.svg",
    "revision": "e4380271d64287ecd10e4608b4cab9a8"
  },
  {
    "url": "images/emoji/archive/1f35e.svg",
    "revision": "407f81fb335a62e1344526282a114d2f"
  },
  {
    "url": "images/emoji/archive/1f363.svg",
    "revision": "61a4b67e939f0abb073dcc89532289e9"
  },
  {
    "url": "images/emoji/archive/1f364.svg",
    "revision": "6df5a76a66ae0dda7565cfad20c6baf4"
  },
  {
    "url": "images/emoji/archive/1f366.svg",
    "revision": "1556ac7691752d384f2592910664d7d4"
  },
  {
    "url": "images/emoji/archive/1f367.svg",
    "revision": "21e2332e439e25f312f009883cdd9333"
  },
  {
    "url": "images/emoji/archive/1f368.svg",
    "revision": "7a7b4f0ad9311b5fa2e2dfdae87df078"
  },
  {
    "url": "images/emoji/archive/1f36b.svg",
    "revision": "4e92e6f1ff41122379b25beeef3b33a0"
  },
  {
    "url": "images/emoji/archive/1f36d.svg",
    "revision": "cfa6dbe5b2b3e3e2d997662d6efa5915"
  },
  {
    "url": "images/emoji/archive/1f36f.svg",
    "revision": "08a0d7cf74aa1124abd64d52a45c0c46"
  },
  {
    "url": "images/emoji/archive/1f373.svg",
    "revision": "fe6751e2e7bd94abf2d73f44dd6bb070"
  },
  {
    "url": "images/emoji/archive/1f37f.svg",
    "revision": "43d3de95c563774fff55e997ba536e03"
  },
  {
    "url": "images/emoji/archive/1f380.svg",
    "revision": "69d885cb664bfaca985be01853987d1c"
  },
  {
    "url": "images/emoji/archive/1f385.svg",
    "revision": "e96f8648f6b34189b751acb1f3b240ea"
  },
  {
    "url": "images/emoji/archive/1f386.svg",
    "revision": "6b5fa74ca82b029ac8175cf753d1354b"
  },
  {
    "url": "images/emoji/archive/1f392.svg",
    "revision": "0b2e0cf5f9ed0673855f3880c8b7f96f"
  },
  {
    "url": "images/emoji/archive/1f393.svg",
    "revision": "ba9da964ec47a92ad3831db73814b87a"
  },
  {
    "url": "images/emoji/archive/1f396.svg",
    "revision": "b68783c64dad805c8bc0acabcdfb72f4"
  },
  {
    "url": "images/emoji/archive/1f399.svg",
    "revision": "9e9b37c9316bcec3c50e720639f6b38c"
  },
  {
    "url": "images/emoji/archive/1f3a3.svg",
    "revision": "2d52d494d5b6e614df05563d45ba43b6"
  },
  {
    "url": "images/emoji/archive/1f3a7.svg",
    "revision": "abc2bc99d6f7281dd13ee50e9294073c"
  },
  {
    "url": "images/emoji/archive/1f3a8.svg",
    "revision": "47f92ba41b461a11499e71a2acd35c39"
  },
  {
    "url": "images/emoji/archive/1f3ac.svg",
    "revision": "7c55610cfa3ddc74a7165c344427b85c"
  },
  {
    "url": "images/emoji/archive/1f3ad.svg",
    "revision": "1b605a3f26928ab704e7a33651b8a77a"
  },
  {
    "url": "images/emoji/archive/1f3ae.svg",
    "revision": "0b6e7d12dbc5a111c63280880f32b3ad"
  },
  {
    "url": "images/emoji/archive/1f3b3.svg",
    "revision": "85721a44aee5c8c4e01c0d1869b9cdcd"
  },
  {
    "url": "images/emoji/archive/1f3b5.svg",
    "revision": "1e326403751827ae8c4ec06450de115f"
  },
  {
    "url": "images/emoji/archive/1f3bd.svg",
    "revision": "9a9a6894777663aa29cd26508e14f0e7"
  },
  {
    "url": "images/emoji/archive/1f3be.svg",
    "revision": "602ed51bba5d4fabf8cd5f7077ac87dc"
  },
  {
    "url": "images/emoji/archive/1f3c0.svg",
    "revision": "fb5e930b2d854e2b91b3f67d8e189937"
  },
  {
    "url": "images/emoji/archive/1f3c8.svg",
    "revision": "e53bac64434ba0505d8993bc28ef71f5"
  },
  {
    "url": "images/emoji/archive/1f3d3.svg",
    "revision": "ba5969e9277f40f20fc6a0994db18e4d"
  },
  {
    "url": "images/emoji/archive/1f3f9.svg",
    "revision": "980d5aaa95222f2a7996b69d6f12b861"
  },
  {
    "url": "images/emoji/archive/1f400.svg",
    "revision": "da215e59fa74cf5d9501f9478e85f5de"
  },
  {
    "url": "images/emoji/archive/1f401.svg",
    "revision": "dc26f957182e1a78f65df6084d1c5c3b"
  },
  {
    "url": "images/emoji/archive/1f402.svg",
    "revision": "7284fa8789997ecf0572094fa3c36831"
  },
  {
    "url": "images/emoji/archive/1f403.svg",
    "revision": "fff9c5a721c6ce09581485ece5c915bb"
  },
  {
    "url": "images/emoji/archive/1f404.svg",
    "revision": "6d844ea5f098345ef77864fda3f2708e"
  },
  {
    "url": "images/emoji/archive/1f405.svg",
    "revision": "39e70e54ceb7fc98995d51dbf31ea32c"
  },
  {
    "url": "images/emoji/archive/1f406.svg",
    "revision": "0e219a4d65dee8985fcd2bad1b72cd5f"
  },
  {
    "url": "images/emoji/archive/1f407.svg",
    "revision": "2afe05af9e094d0e33adbb6b13f3939d"
  },
  {
    "url": "images/emoji/archive/1f408.svg",
    "revision": "70c6b2020de3bcd98c2312dae5ffeb6b"
  },
  {
    "url": "images/emoji/archive/1f409.svg",
    "revision": "53001a1894e2271650e64667dfa29e5d"
  },
  {
    "url": "images/emoji/archive/1f40a.svg",
    "revision": "49b96b031aa31e8a928ebc7a28e504d2"
  },
  {
    "url": "images/emoji/archive/1f40b.svg",
    "revision": "6a5d0d3b27c0f6efa022e3d2ea8aa9e7"
  },
  {
    "url": "images/emoji/archive/1f40c.svg",
    "revision": "f856b33effbbdbb2b6bc69f847c03f88"
  },
  {
    "url": "images/emoji/archive/1f40d.svg",
    "revision": "2790bd269998c17cfcd4e7e690b83003"
  },
  {
    "url": "images/emoji/archive/1f40e.svg",
    "revision": "0584169019d8075cc4b21ec410405d1b"
  },
  {
    "url": "images/emoji/archive/1f40f.svg",
    "revision": "bc21a25551e37a1738834b17034a716f"
  },
  {
    "url": "images/emoji/archive/1f410.svg",
    "revision": "03285e98fe6dc20f7fc153a0bcaf0bac"
  },
  {
    "url": "images/emoji/archive/1f411.svg",
    "revision": "efd7e0f666ecc1172f57cf65d6434c92"
  },
  {
    "url": "images/emoji/archive/1f412.svg",
    "revision": "8eeafc92bf43ce3bebd2b332f9d128a4"
  },
  {
    "url": "images/emoji/archive/1f413.svg",
    "revision": "052bd366e802a219dac99110bc08a1a4"
  },
  {
    "url": "images/emoji/archive/1f414.svg",
    "revision": "804ff1820ae0eeafcf78e279bc72a15c"
  },
  {
    "url": "images/emoji/archive/1f415.svg",
    "revision": "729459d30c73bef5a1bba74e51cfbddd"
  },
  {
    "url": "images/emoji/archive/1f416.svg",
    "revision": "f8d58fe19ec9a91ec16067f5f51a7b7d"
  },
  {
    "url": "images/emoji/archive/1f417.svg",
    "revision": "832139fbad8e37d8e211b6a12e49baad"
  },
  {
    "url": "images/emoji/archive/1f418.svg",
    "revision": "e02cd8bf3d5d66c61889df934cb3f22e"
  },
  {
    "url": "images/emoji/archive/1f419.svg",
    "revision": "fb4399d840d57500f71b6783dc1b2648"
  },
  {
    "url": "images/emoji/archive/1f41b.svg",
    "revision": "90f4ced12f2ab99757327c9fdde92bdb"
  },
  {
    "url": "images/emoji/archive/1f41c.svg",
    "revision": "5c01f42eedc28b80e027af4e84f8660c"
  },
  {
    "url": "images/emoji/archive/1f41d.svg",
    "revision": "871a8fddabbbdc9a97c65ce908f958b6"
  },
  {
    "url": "images/emoji/archive/1f41e.svg",
    "revision": "d4cbfe79b6680d65eafd5d330115a563"
  },
  {
    "url": "images/emoji/archive/1f41f.svg",
    "revision": "09ea71d98caf8fe3d3681360ba75464c"
  },
  {
    "url": "images/emoji/archive/1f421.svg",
    "revision": "f7f03ac9b7fc8dc67b7d8d70c71f3185"
  },
  {
    "url": "images/emoji/archive/1f422.svg",
    "revision": "ca41438ffd1164c1c19e466952506245"
  },
  {
    "url": "images/emoji/archive/1f423.svg",
    "revision": "1416afd99bd00a725e4642acb472a1fa"
  },
  {
    "url": "images/emoji/archive/1f424.svg",
    "revision": "f14a16dc723981c92c96911776451a19"
  },
  {
    "url": "images/emoji/archive/1f425.svg",
    "revision": "26dcf3d2e30dfa1c29dc184948a6de4d"
  },
  {
    "url": "images/emoji/archive/1f427.svg",
    "revision": "6d93cbca2ccb44c2e90977377b7c971b"
  },
  {
    "url": "images/emoji/archive/1f428.svg",
    "revision": "db975928d0f5c84b8d466e7a9187dde0"
  },
  {
    "url": "images/emoji/archive/1f429.svg",
    "revision": "3075db10307710884365329433c8b8d6"
  },
  {
    "url": "images/emoji/archive/1f42b.svg",
    "revision": "5a1779cc96c45a70271cafdcfe68b92b"
  },
  {
    "url": "images/emoji/archive/1f431.svg",
    "revision": "1260bed5796b8a7f005ad539a9c82130"
  },
  {
    "url": "images/emoji/archive/1f432.svg",
    "revision": "a8afaeb4e736b0eb4bb7f2936906befe"
  },
  {
    "url": "images/emoji/archive/1f433.svg",
    "revision": "c1f3d52792efe54802e20d55afd5b98a"
  },
  {
    "url": "images/emoji/archive/1f438.svg",
    "revision": "cc10a30cc290c7a4724722cf89bda97f"
  },
  {
    "url": "images/emoji/archive/1f439.svg",
    "revision": "5055b89ac62ed21ba9f7653db97e8172"
  },
  {
    "url": "images/emoji/archive/1f43f.svg",
    "revision": "33a4e4ed315a42a8b43ff48d7c8eab7f"
  },
  {
    "url": "images/emoji/archive/1f442.svg",
    "revision": "f6690a3028d86ed33bd5b33a383360cc"
  },
  {
    "url": "images/emoji/archive/1f453.svg",
    "revision": "709fee9e23f001bb0e45914e6fa6d630"
  },
  {
    "url": "images/emoji/archive/1f459.svg",
    "revision": "3bada904f58cca06c4398422f2db03c9"
  },
  {
    "url": "images/emoji/archive/1f45a.svg",
    "revision": "0f6eaca7f4531f7a57bc39874d1e48d9"
  },
  {
    "url": "images/emoji/archive/1f462.svg",
    "revision": "41c5b1f2e95e72580b805625e1a7d5be"
  },
  {
    "url": "images/emoji/archive/1f466.svg",
    "revision": "a1fc3eee5d360e4babb830d33e9a9111"
  },
  {
    "url": "images/emoji/archive/1f467.svg",
    "revision": "26155e01d707a57b0be05b01ea8bf29e"
  },
  {
    "url": "images/emoji/archive/1f468.svg",
    "revision": "b0ab72fd69cf08e6ba75cf7272c6d591"
  },
  {
    "url": "images/emoji/archive/1f469.svg",
    "revision": "5e3f7712539d92f8daf6a5c3bdc417f8"
  },
  {
    "url": "images/emoji/archive/1f470.svg",
    "revision": "33c97411251f3d954031d67967524b9f"
  },
  {
    "url": "images/emoji/archive/1f471.svg",
    "revision": "3ffa8c9078a9c19d5557ea75adbfae4d"
  },
  {
    "url": "images/emoji/archive/1f472.svg",
    "revision": "55639fad80af65cfeda9a374473f0c4c"
  },
  {
    "url": "images/emoji/archive/1f473.svg",
    "revision": "db86b8faf1afeeda250822244d965622"
  },
  {
    "url": "images/emoji/archive/1f474.svg",
    "revision": "011bbcb7e4877f413006926a21fbdae4"
  },
  {
    "url": "images/emoji/archive/1f475.svg",
    "revision": "be064f0effbec8626d74a091c1cf8214"
  },
  {
    "url": "images/emoji/archive/1f476.svg",
    "revision": "f37831acf1aefac0bd428fc3d1d83cc2"
  },
  {
    "url": "images/emoji/archive/1f477.svg",
    "revision": "068807718b257c3055622fb40bfe085e"
  },
  {
    "url": "images/emoji/archive/1f478.svg",
    "revision": "0491de5d68ea2413925437b1cc756419"
  },
  {
    "url": "images/emoji/archive/1f479.svg",
    "revision": "3d9f07e0065d25c92cb01b3c03f2587f"
  },
  {
    "url": "images/emoji/archive/1f480.svg",
    "revision": "598f19686146419e928d80622bbea639"
  },
  {
    "url": "images/emoji/archive/1f482.svg",
    "revision": "7ba31275f55312bb6c8412e1d58cb3d2"
  },
  {
    "url": "images/emoji/archive/1f489.svg",
    "revision": "dd8e7382015c23e398abb9a8035dbed1"
  },
  {
    "url": "images/emoji/archive/1f48d.svg",
    "revision": "127cacfaa17c2b114d3e19f46e33f5af"
  },
  {
    "url": "images/emoji/archive/1f48e.svg",
    "revision": "201788d996eb8b7b569363ce7cc77e84"
  },
  {
    "url": "images/emoji/archive/1f493.svg",
    "revision": "321998c42d92fa926d6319f794e228b5"
  },
  {
    "url": "images/emoji/archive/1f494.svg",
    "revision": "2ceb26d2c32d20e5e4c330377511579b"
  },
  {
    "url": "images/emoji/archive/1f498.svg",
    "revision": "b417072b40b99d13c77fa43038605dc0"
  },
  {
    "url": "images/emoji/archive/1f49a.svg",
    "revision": "fc710c3dd93161c98915b3f9df1b985b"
  },
  {
    "url": "images/emoji/archive/1f49b.svg",
    "revision": "3f68e7fd9a9d2162205e51401ccfcb9a"
  },
  {
    "url": "images/emoji/archive/1f49c.svg",
    "revision": "71b21a44e08c1023933fdca707423f5b"
  },
  {
    "url": "images/emoji/archive/1f4a7.svg",
    "revision": "906b47181bb0b8f807f6cc22ccbef6fe"
  },
  {
    "url": "images/emoji/archive/1f4a8.svg",
    "revision": "0f35417daa95daa3eac85ebf3a70eab5"
  },
  {
    "url": "images/emoji/archive/1f4ad.svg",
    "revision": "0b8afae84b900b1048883aa95452b97a"
  },
  {
    "url": "images/emoji/archive/1f4b5.svg",
    "revision": "1676011f693a095c2f22efe81432457f"
  },
  {
    "url": "images/emoji/archive/1f4cb.svg",
    "revision": "f6c7b6917f087f9c6a80a02a54bd7e65"
  },
  {
    "url": "images/emoji/archive/1f4cc.svg",
    "revision": "78ed3d4e63f82c9315a801024097a7cd"
  },
  {
    "url": "images/emoji/archive/1f4ce.svg",
    "revision": "fbd463799b6bb86873ff172131800aa2"
  },
  {
    "url": "images/emoji/archive/1f4cf.svg",
    "revision": "be6018132e6c7105a8d378dde124973b"
  },
  {
    "url": "images/emoji/archive/1f4db.svg",
    "revision": "e702891bd80be3d4d107b290524f7ba4"
  },
  {
    "url": "images/emoji/archive/1f4de.svg",
    "revision": "d35bbd109e11e57245d1f0e7595c0915"
  },
  {
    "url": "images/emoji/archive/1f4e2.svg",
    "revision": "4bf9e089bfa99f9e867856294ad8a505"
  },
  {
    "url": "images/emoji/archive/1f4e3.svg",
    "revision": "9d57a7aece1b769602f7c70d791a4002"
  },
  {
    "url": "images/emoji/archive/1f4ef.svg",
    "revision": "017f8478d785493a58b3b8d065c28207"
  },
  {
    "url": "images/emoji/archive/1f4f1.svg",
    "revision": "de0afad882a5a7b00ddb6f845bc901e1"
  },
  {
    "url": "images/emoji/archive/1f4f7.svg",
    "revision": "e838908afa297859ddd6f34bbcc30a56"
  },
  {
    "url": "images/emoji/archive/1f4fa.svg",
    "revision": "de82e8a839519445fb93718cf48e9cc9"
  },
  {
    "url": "images/emoji/archive/1f506.svg",
    "revision": "afc898fcfb35d55275a86bc8a55de975"
  },
  {
    "url": "images/emoji/archive/1f50e.svg",
    "revision": "6a702fead445198a3729c2fbc47d074d"
  },
  {
    "url": "images/emoji/archive/1f512.svg",
    "revision": "80c0cb55e50d4eb939a6b9043d34e7a1"
  },
  {
    "url": "images/emoji/archive/1f514.svg",
    "revision": "2e1320c37655108a2c8da7349da5c07d"
  },
  {
    "url": "images/emoji/archive/1f526.svg",
    "revision": "3a9a88adda91b3eea4444ddfd77d4132"
  },
  {
    "url": "images/emoji/archive/1f528.svg",
    "revision": "3acb7366c96df5b9a4c8944e65a41bef"
  },
  {
    "url": "images/emoji/archive/1f576.svg",
    "revision": "78b8e906d389c120c3b7450b20f98495"
  },
  {
    "url": "images/emoji/archive/1f578.svg",
    "revision": "f60089a4b2d1dcd3cc875ed25c9023a5"
  },
  {
    "url": "images/emoji/archive/1f579.svg",
    "revision": "cce2aa84886efa567f2131fd4b33ba97"
  },
  {
    "url": "images/emoji/archive/1f58a.svg",
    "revision": "e6949636501b8de5bd1fe85853209b06"
  },
  {
    "url": "images/emoji/archive/1f58b.svg",
    "revision": "8f796d506309d7871690a683abfe779b"
  },
  {
    "url": "images/emoji/archive/1f58c.svg",
    "revision": "f2a740e9a9bc46d5cc049867963c907d"
  },
  {
    "url": "images/emoji/archive/1f58d.svg",
    "revision": "f7eac9c280c081b7b692040f3ea879cd"
  },
  {
    "url": "images/emoji/archive/1f590.svg",
    "revision": "e5d4c9379916f3bcc95def9b579de4d2"
  },
  {
    "url": "images/emoji/archive/1f596.svg",
    "revision": "20e5f8a57f5e170bd89f633965fd1868"
  },
  {
    "url": "images/emoji/archive/1f5ef.svg",
    "revision": "b7bddb6de1fe0991341af124c9ccaa20"
  },
  {
    "url": "images/emoji/archive/1f600.svg",
    "revision": "46190565a98301c847e253593fd22364"
  },
  {
    "url": "images/emoji/archive/1f601.svg",
    "revision": "b3563b1949a11cb760a908b7ee226fab"
  },
  {
    "url": "images/emoji/archive/1f603.svg",
    "revision": "ac00e0f6ba3e9c9a426ae6f55538e94a"
  },
  {
    "url": "images/emoji/archive/1f604.svg",
    "revision": "022702cc7fceb2b41371e9a6b232b35c"
  },
  {
    "url": "images/emoji/archive/1f606.svg",
    "revision": "1f3a959d79917683aff97fec4aed4018"
  },
  {
    "url": "images/emoji/archive/1f610.svg",
    "revision": "41408bab53210af1259aa6b30b3430cb"
  },
  {
    "url": "images/emoji/archive/1f611.svg",
    "revision": "c77225d51428ac0c5265847f44f57e4f"
  },
  {
    "url": "images/emoji/archive/1f612.svg",
    "revision": "7b31962f7aa38084ada65daed3284064"
  },
  {
    "url": "images/emoji/archive/1f613.svg",
    "revision": "623bbb0df93f439d1de88b0d54e9bb90"
  },
  {
    "url": "images/emoji/archive/1f614.svg",
    "revision": "923fb48332135f2f497a2c6803b1c2a1"
  },
  {
    "url": "images/emoji/archive/1f615.svg",
    "revision": "98095343577ed59a9b0273059a131657"
  },
  {
    "url": "images/emoji/archive/1f616.svg",
    "revision": "9a028d9793d88424c7295ab5288502d5"
  },
  {
    "url": "images/emoji/archive/1f617.svg",
    "revision": "ab6ee9876ee4fdf26d0d6a6bed92874c"
  },
  {
    "url": "images/emoji/archive/1f619.svg",
    "revision": "ddb7997896e862e83b1c27ecd0ba65b1"
  },
  {
    "url": "images/emoji/archive/1f620.svg",
    "revision": "edcfb84acd65c4f7aa952fdb22ddc6c7"
  },
  {
    "url": "images/emoji/archive/1f622.svg",
    "revision": "3ce7fd3a19bbe2fff5acd6fe207dd9f9"
  },
  {
    "url": "images/emoji/archive/1f623.svg",
    "revision": "6b55b0a5d468eaabc130f9fa7d0c7ea1"
  },
  {
    "url": "images/emoji/archive/1f624.svg",
    "revision": "e6f191bbc2e7251b8b3d7abfe04bb2ca"
  },
  {
    "url": "images/emoji/archive/1f625.svg",
    "revision": "ea090387064c7423c456f690cbd88575"
  },
  {
    "url": "images/emoji/archive/1f626.svg",
    "revision": "c99703059b55bd17e236ed3357c6c3b2"
  },
  {
    "url": "images/emoji/archive/1f627.svg",
    "revision": "8e28f4da81484c1073a50b7bb110c25e"
  },
  {
    "url": "images/emoji/archive/1f629.svg",
    "revision": "a9e2ca8c236f8e28c0b1e8b85219c86b"
  },
  {
    "url": "images/emoji/archive/1f630.svg",
    "revision": "521b978025e3c17d118dffd16cbbcd73"
  },
  {
    "url": "images/emoji/archive/1f633.svg",
    "revision": "22cfd1e8f49e129fd0040eddd99615f8"
  },
  {
    "url": "images/emoji/archive/1f634.svg",
    "revision": "21b95c7efbe240cfb79f3b24da6c3ff5"
  },
  {
    "url": "images/emoji/archive/1f636.svg",
    "revision": "7a0c44e46908bc2453a3fc5c0218135a"
  },
  {
    "url": "images/emoji/archive/1f63d.svg",
    "revision": "22d23ad9bcc7d53d4e3d83c2c39f5cce"
  },
  {
    "url": "images/emoji/archive/1f643.svg",
    "revision": "e1fc42cd3ea55a2a615ca6f509c96849"
  },
  {
    "url": "images/emoji/archive/1f648.svg",
    "revision": "c5d84b1eab0a80ac9f1b962e74fafe33"
  },
  {
    "url": "images/emoji/archive/1f649.svg",
    "revision": "61dcc320bf9af95c3384e07ab72c86f9"
  },
  {
    "url": "images/emoji/archive/1f64a.svg",
    "revision": "6a6ce2898f38c851789376e4778581af"
  },
  {
    "url": "images/emoji/archive/1f682.svg",
    "revision": "d9cc0316ec5066a3f6407ffb42f64196"
  },
  {
    "url": "images/emoji/archive/1f6a8.svg",
    "revision": "632f4bc7b09f54e47de91eb343546606"
  },
  {
    "url": "images/emoji/archive/1f910.svg",
    "revision": "e774b9a6b7c024763393136d2009a0f0"
  },
  {
    "url": "images/emoji/archive/1f914.svg",
    "revision": "b662cea1624af4adf8ab7a6f29cc82eb"
  },
  {
    "url": "images/emoji/archive/1f917.svg",
    "revision": "ce4eae4390b933bf39ea9f0c4efb0469"
  },
  {
    "url": "images/emoji/archive/1f919.svg",
    "revision": "f186449a176299c591911222643123d8"
  },
  {
    "url": "images/emoji/archive/1f91a.svg",
    "revision": "6c51aa4f0375d85f7f0cef87640bef94"
  },
  {
    "url": "images/emoji/archive/1f91b.svg",
    "revision": "349129e552ff03f89a98065644164d50"
  },
  {
    "url": "images/emoji/archive/1f91c.svg",
    "revision": "39d9d592feb2ad28a5430cb900c8d741"
  },
  {
    "url": "images/emoji/archive/1f923.svg",
    "revision": "45e71d72fb28166dfeb79f78f820594e"
  },
  {
    "url": "images/emoji/archive/1f925.svg",
    "revision": "54c5295e5adda8006683adce55d89703"
  },
  {
    "url": "images/emoji/archive/1f926.svg",
    "revision": "d3ae922693e076294babc51212dc782f"
  },
  {
    "url": "images/emoji/archive/1f934.svg",
    "revision": "e02d7dbf0bdf1d799eaa6a942b90d81b"
  },
  {
    "url": "images/emoji/archive/1f936.svg",
    "revision": "31e6286646d9d2c8967c11e8b5328ed0"
  },
  {
    "url": "images/emoji/archive/1f947.svg",
    "revision": "9c51d884256e93b335d8cf286f4bc101"
  },
  {
    "url": "images/emoji/archive/1f948.svg",
    "revision": "1c8baf079894e3f8c266cd58f2500487"
  },
  {
    "url": "images/emoji/archive/1f949.svg",
    "revision": "263c8d33151c468aaf393e76805f5fc3"
  },
  {
    "url": "images/emoji/archive/1f950.svg",
    "revision": "fc41ea5b0ac7c9edc44e819e43a421b3"
  },
  {
    "url": "images/emoji/archive/1f951.svg",
    "revision": "60f424e3a0fc56c3907e0a8ef13dbdde"
  },
  {
    "url": "images/emoji/archive/1f953.svg",
    "revision": "1bddbf569015f6ee0d4af069862b5977"
  },
  {
    "url": "images/emoji/archive/1f954.svg",
    "revision": "cc0f07d28703f91a54605bbff86434ec"
  },
  {
    "url": "images/emoji/archive/1f955.svg",
    "revision": "e9b1419ce2442e61e54b6f1ac311a500"
  },
  {
    "url": "images/emoji/archive/1f956.svg",
    "revision": "26b2e2b50da305e1d904d79b99d29e9a"
  },
  {
    "url": "images/emoji/archive/1f957.svg",
    "revision": "e95ef4fe4f6f0221302cc6b79ce78c1b"
  },
  {
    "url": "images/emoji/archive/1f958.svg",
    "revision": "ddf9972cb71d386097112640accacdfc"
  },
  {
    "url": "images/emoji/archive/1f959.svg",
    "revision": "2e74c37d4672878e855c03aebeb1ef35"
  },
  {
    "url": "images/emoji/archive/1f960.svg",
    "revision": "36c5bb5c14244e958c35b54a6bd02e33"
  },
  {
    "url": "images/emoji/archive/1f980.svg",
    "revision": "b0e4a9a9f938cbefd04be8e8243776c6"
  },
  {
    "url": "images/emoji/archive/1f982.svg",
    "revision": "b472f2f7aeb6da45d3df07e42061d9bb"
  },
  {
    "url": "images/emoji/archive/1f983.svg",
    "revision": "34760d97ce698919eb551893005eb718"
  },
  {
    "url": "images/emoji/archive/1f985.svg",
    "revision": "e4c5b73bd31035ce98f0dab26043f164"
  },
  {
    "url": "images/emoji/archive/1f986.svg",
    "revision": "7b84cd1b5159032c3a9e8521151d6a44"
  },
  {
    "url": "images/emoji/archive/1f987.svg",
    "revision": "7232ac448b2390a738ba2ca4eea699f7"
  },
  {
    "url": "images/emoji/archive/1f988.svg",
    "revision": "a560759b2ba5c97bd15ef5b6dabc8267"
  },
  {
    "url": "images/emoji/archive/1f989.svg",
    "revision": "5ab2ca127a68a05e59d86be07a515fd4"
  },
  {
    "url": "images/emoji/archive/1f98c.svg",
    "revision": "d5a170a89716d4dd7edcbca58dc36a26"
  },
  {
    "url": "images/emoji/archive/1f98e.svg",
    "revision": "6bf50c5a60434a3f4936e504bd835d19"
  },
  {
    "url": "images/emoji/archive/1f98f.svg",
    "revision": "c72ae5959ce8f48765983073b8e38bca"
  },
  {
    "url": "images/emoji/archive/1f990.svg",
    "revision": "6b8dc43dc52970b52e38f5519b2585c0"
  },
  {
    "url": "images/emoji/archive/1f991.svg",
    "revision": "3fd0d842044eed84661c0e23bbc861a8"
  },
  {
    "url": "images/emoji/archive/2049.svg",
    "revision": "0ff970c5ee8587abce4ddb4bb0fad1d2"
  },
  {
    "url": "images/emoji/archive/23f0.svg",
    "revision": "4057568edb29dbc91fd047997392cc47"
  },
  {
    "url": "images/emoji/archive/23f1.svg",
    "revision": "74c4fc420c350b2f2e35d966c0ee7074"
  },
  {
    "url": "images/emoji/archive/23f3.svg",
    "revision": "d6aef255a629d4899e0ec280b467c2df"
  },
  {
    "url": "images/emoji/archive/2601.svg",
    "revision": "7c9d144f31648d3c50ec5f0e82ee9efe"
  },
  {
    "url": "images/emoji/archive/2603.svg",
    "revision": "28a37c3293f111edfb75db3fa15a0782"
  },
  {
    "url": "images/emoji/archive/2604.svg",
    "revision": "cde5ccab20c7f168382d6e3f4f8ff022"
  },
  {
    "url": "images/emoji/archive/260e.svg",
    "revision": "06f1d40a7d82e3f392391416669a2957"
  },
  {
    "url": "images/emoji/archive/2614.svg",
    "revision": "59455b39987f1a085ba33ec7d0963f1d"
  },
  {
    "url": "images/emoji/archive/2639.svg",
    "revision": "630f36d2a259794ffa6bc6c6fe83acdb"
  },
  {
    "url": "images/emoji/archive/2692.svg",
    "revision": "810ad2f6759a8c7dd6b2deab7b9a8f9b"
  },
  {
    "url": "images/emoji/archive/2693.svg",
    "revision": "873968d9234f3586ddd2a6ebf6c78c84"
  },
  {
    "url": "images/emoji/archive/2694.svg",
    "revision": "55bfe58fe00c20c8bb76e97872a2522c"
  },
  {
    "url": "images/emoji/archive/2696.svg",
    "revision": "110b293e587684ce386009f008e1c741"
  },
  {
    "url": "images/emoji/archive/26a1.svg",
    "revision": "fca87d88dbf583e7bfffa93255850133"
  },
  {
    "url": "images/emoji/archive/26bd.svg",
    "revision": "51aad59bbbc7ea39b4b509aa86bff97a"
  },
  {
    "url": "images/emoji/archive/26c5.svg",
    "revision": "206fb4eaa60dd51baad122affc07d226"
  },
  {
    "url": "images/emoji/archive/26d1.svg",
    "revision": "11055cc59038f6be2a6f28a33991a2c1"
  },
  {
    "url": "images/emoji/archive/26d4.svg",
    "revision": "c2b4d528b845d232e1cf210b590b9ea1"
  },
  {
    "url": "images/emoji/archive/2702.svg",
    "revision": "ad493a496c67766baa1813a3608fa79c"
  },
  {
    "url": "images/emoji/archive/2708.svg",
    "revision": "0c39fa5b88db9ccaf82c5a263e844e1e"
  },
  {
    "url": "images/emoji/archive/270d.svg",
    "revision": "f767f40dbed58c500a2be2825ecd83ab"
  },
  {
    "url": "images/emoji/archive/270f.svg",
    "revision": "5759f59f60abc9fcfad098c1b3f4ac56"
  },
  {
    "url": "images/emoji/archive/274c.svg",
    "revision": "55439f129de04d498d7efbb18843e7b0"
  },
  {
    "url": "images/emoji/archive/2753.svg",
    "revision": "17ef4ea823b305043f6282bf643c65e9"
  },
  {
    "url": "images/emoji/archive/2757.svg",
    "revision": "d81f33de685d178b55d967ddc1d91c7d"
  },
  {
    "url": "images/emoji/f1.svg",
    "revision": "9957b994711abe97edd45a05f89596e1"
  },
  {
    "url": "images/emoji/f10.svg",
    "revision": "0af29359e691ddbec4eb977b3596f84f"
  },
  {
    "url": "images/emoji/f11.svg",
    "revision": "79e26fbf666e6bf8b27c49c19f8ccd41"
  },
  {
    "url": "images/emoji/f12.svg",
    "revision": "c1d13f7bc7c36e3eee97d0ced8f57ffb"
  },
  {
    "url": "images/emoji/f13.svg",
    "revision": "8437a232d140078b45555739283b29b2"
  },
  {
    "url": "images/emoji/f14.svg",
    "revision": "52ae8dd3d3a65068b67eb58fb4a9a6ee"
  },
  {
    "url": "images/emoji/f15.svg",
    "revision": "284fab8bf0f89798869c873935491234"
  },
  {
    "url": "images/emoji/f16.svg",
    "revision": "8d0fa7b937690ac3ce287e2e4fd0258e"
  },
  {
    "url": "images/emoji/f17.svg",
    "revision": "c4f068b2a70f1fef32d42ede81b4d900"
  },
  {
    "url": "images/emoji/f18.svg",
    "revision": "66d86c327ac2957a2f8bd59a69824d6b"
  },
  {
    "url": "images/emoji/f19.svg",
    "revision": "b9c13b583b423c70e1cc0e762953a895"
  },
  {
    "url": "images/emoji/f2.svg",
    "revision": "5fef24d933c744459c61deb4759fd599"
  },
  {
    "url": "images/emoji/f20.svg",
    "revision": "ebb86d3b97a60b83dedf0bd6a0c63771"
  },
  {
    "url": "images/emoji/f21.svg",
    "revision": "51e8387bcc70b3e5bf2fb7e9bf695818"
  },
  {
    "url": "images/emoji/f22.svg",
    "revision": "1d3ca2e7ce3cb765f9cb826e8addfe2c"
  },
  {
    "url": "images/emoji/f23.svg",
    "revision": "a960cd5bd6b95c65fb9f24848c05cd03"
  },
  {
    "url": "images/emoji/f24.svg",
    "revision": "89aacbffcb7a40423d42e7d1b1b2f08a"
  },
  {
    "url": "images/emoji/f25.svg",
    "revision": "f12aeb5e0cac0c11b717ba6743073838"
  },
  {
    "url": "images/emoji/f26.svg",
    "revision": "eaa89eb3d63a37a410f69c5b235f1533"
  },
  {
    "url": "images/emoji/f27.svg",
    "revision": "e8e9a27dc2fe2c6e369a638602f65d1e"
  },
  {
    "url": "images/emoji/f28.svg",
    "revision": "1121a9e495d1bdf646021d79b6f418bb"
  },
  {
    "url": "images/emoji/f29.svg",
    "revision": "6b71482aee78bb47f6f13bec770f2bec"
  },
  {
    "url": "images/emoji/f3.svg",
    "revision": "49d9cc4f2789e7d210575c1f102647e3"
  },
  {
    "url": "images/emoji/f30.svg",
    "revision": "0e27281091d774c89c370d29106b046a"
  },
  {
    "url": "images/emoji/f31.svg",
    "revision": "bcab64c6b148d4031f09654f0085155d"
  },
  {
    "url": "images/emoji/f32.svg",
    "revision": "504f824f033c7a234fe7ca164cc78dee"
  },
  {
    "url": "images/emoji/f33.svg",
    "revision": "f8c4963863920ecea4eb3a824629876d"
  },
  {
    "url": "images/emoji/f34.svg",
    "revision": "4672eca29145372b755218ec4cf575d0"
  },
  {
    "url": "images/emoji/f35.svg",
    "revision": "2860a4815634ea6ad3be2da101496147"
  },
  {
    "url": "images/emoji/f36.svg",
    "revision": "2ce3d36d89e472f6b0bb67c69766b3cf"
  },
  {
    "url": "images/emoji/f37.svg",
    "revision": "24e92a93940d90c2fec1fdfe4c3b386f"
  },
  {
    "url": "images/emoji/f38.svg",
    "revision": "c696ce291e87f623e5e3807a85f87433"
  },
  {
    "url": "images/emoji/f39.svg",
    "revision": "304f5a4cf24f5fb3b31e10d64c81ed43"
  },
  {
    "url": "images/emoji/f4.svg",
    "revision": "b475a30b01ec1bc16c636c3e856b8bc4"
  },
  {
    "url": "images/emoji/f40.svg",
    "revision": "5968da9381a93a58a2fc4289bc754689"
  },
  {
    "url": "images/emoji/f5.svg",
    "revision": "65be8634ab6a2c06faace95651806db6"
  },
  {
    "url": "images/emoji/f6.svg",
    "revision": "0555508ae742a7f3fa4c138befb372f6"
  },
  {
    "url": "images/emoji/f7.svg",
    "revision": "a3d972283b006d9d36448efed4b81b6c"
  },
  {
    "url": "images/emoji/f8.svg",
    "revision": "67a30f8f6d29a5fdfc18f35a601a864e"
  },
  {
    "url": "images/emoji/f9.svg",
    "revision": "1dd7c9a7476d27c1d57df54e73249fcb"
  },
  {
    "url": "images/emoji/g1.svg",
    "revision": "d2180cac4907df766b065498fc19f2aa"
  },
  {
    "url": "images/emoji/g10.svg",
    "revision": "710595b015a864064ade3952408172a2"
  },
  {
    "url": "images/emoji/g11.svg",
    "revision": "f3798497b6544f5046162450c9c0d667"
  },
  {
    "url": "images/emoji/g12.svg",
    "revision": "8770047c74094dcc4b49f75f94808928"
  },
  {
    "url": "images/emoji/g13.svg",
    "revision": "864ded6ef0e747ece7d8255ea2998171"
  },
  {
    "url": "images/emoji/g14.svg",
    "revision": "0ca1ebb640f7ac933227ff823d0d061f"
  },
  {
    "url": "images/emoji/g2.svg",
    "revision": "fc29318d21226aab9698ebfc78aa68c3"
  },
  {
    "url": "images/emoji/g3.svg",
    "revision": "e9861b845050498baa11501b706745b9"
  },
  {
    "url": "images/emoji/g4.svg",
    "revision": "daf56c6e7c4bd43178ca1df2847e0b5f"
  },
  {
    "url": "images/emoji/g5.svg",
    "revision": "e7a38bd78f72ccd374f96b98814868bf"
  },
  {
    "url": "images/emoji/g6.svg",
    "revision": "6b3a90281502c2a6659b4ae5562eee64"
  },
  {
    "url": "images/emoji/g7.svg",
    "revision": "791de73df393cd41e35a0ac2a90a40f1"
  },
  {
    "url": "images/emoji/g8.svg",
    "revision": "42d0aeabffbb2c99fc1d171434ae4acf"
  },
  {
    "url": "images/emoji/g9.svg",
    "revision": "0d74f6e3c2fde8b1ffa3427a44e282ac"
  },
  {
    "url": "images/emoji/h1.svg",
    "revision": "be8bee3269e294d30de5b4d1a07f4a2d"
  },
  {
    "url": "images/emoji/h10.svg",
    "revision": "39cbbc51783e71ba732be4ca6926d438"
  },
  {
    "url": "images/emoji/h11.svg",
    "revision": "f3ce70cb710051c157362e4e1ebe03c2"
  },
  {
    "url": "images/emoji/h12.svg",
    "revision": "43325e674f376b2304d246decdd21acf"
  },
  {
    "url": "images/emoji/h13.svg",
    "revision": "e0cbd729ab326aac4911ca2484f484c2"
  },
  {
    "url": "images/emoji/h14.svg",
    "revision": "45ef9284b6ee0a674c1eee890c203e89"
  },
  {
    "url": "images/emoji/h15.svg",
    "revision": "9790d3c539b004c32e1e6b3396b7b45c"
  },
  {
    "url": "images/emoji/h16.svg",
    "revision": "0c0eba5578e6fed85a3f720a16dacf02"
  },
  {
    "url": "images/emoji/h17.svg",
    "revision": "50711861a6b5dd857d7c940378ed98b5"
  },
  {
    "url": "images/emoji/h18.svg",
    "revision": "19c26c836f42e4cf4e79b190d99d9c3f"
  },
  {
    "url": "images/emoji/h19.svg",
    "revision": "bf201964730037a85fc39de606070857"
  },
  {
    "url": "images/emoji/h2.svg",
    "revision": "531afa8b68a8fa16a77ba39d6d27f16d"
  },
  {
    "url": "images/emoji/h20.svg",
    "revision": "3dcce8058302c7e2ce9ccbcba8f88835"
  },
  {
    "url": "images/emoji/h21.svg",
    "revision": "4f494d850de31fa556eaa34a02c2bc6a"
  },
  {
    "url": "images/emoji/h22.svg",
    "revision": "e834f7176e7bf1cd1cd173ae75d1b952"
  },
  {
    "url": "images/emoji/h23.svg",
    "revision": "1f25887553047d219952f65299036897"
  },
  {
    "url": "images/emoji/h24.svg",
    "revision": "c7b616770086ceba0819a69fb7af8a30"
  },
  {
    "url": "images/emoji/h3.svg",
    "revision": "e23cf19457e47c824c4281de8fc04d8c"
  },
  {
    "url": "images/emoji/h4.svg",
    "revision": "071e62ea2dc0223800ebe1e6a6e6acb9"
  },
  {
    "url": "images/emoji/h5.svg",
    "revision": "8371fb88333ab4ab643a4fa1ce6d5171"
  },
  {
    "url": "images/emoji/h6.svg",
    "revision": "42f7099e6920d769afd8ac15c92f1ffe"
  },
  {
    "url": "images/emoji/h7.svg",
    "revision": "c58cfe7ce6406faa9e50b62ecdb3bbad"
  },
  {
    "url": "images/emoji/h8.svg",
    "revision": "1e48f71562d42adacc250f083511e979"
  },
  {
    "url": "images/emoji/h9.svg",
    "revision": "4de4301251b70fcab7d43c63952d0827"
  },
  {
    "url": "images/emoji/i0.svg",
    "revision": "a18fa27474a94803ffb96c8c1b92c156"
  },
  {
    "url": "images/emoji/i1.svg",
    "revision": "8197eb924c0c4c755816f7cfa528e4b5"
  },
  {
    "url": "images/emoji/i10.svg",
    "revision": "f835a07199c89d35900cbbd2fb751534"
  },
  {
    "url": "images/emoji/i11.svg",
    "revision": "b89b5eceb24c1341b40af57dd277f8b6"
  },
  {
    "url": "images/emoji/i12.svg",
    "revision": "c45f2e490d84c0cd347f57cbcf53bcc6"
  },
  {
    "url": "images/emoji/i13.svg",
    "revision": "9c72d083d44479f87d165810cb5bcdbf"
  },
  {
    "url": "images/emoji/i14.svg",
    "revision": "bf0ffb293e2081e6a899fab8da677312"
  },
  {
    "url": "images/emoji/i2.svg",
    "revision": "43da79f77022406fc4bc562b5be399e1"
  },
  {
    "url": "images/emoji/i3.svg",
    "revision": "395cc9f260eecf1322c212a965ae34de"
  },
  {
    "url": "images/emoji/i4.svg",
    "revision": "731b286b821208b5868177dd95c78d93"
  },
  {
    "url": "images/emoji/i5.svg",
    "revision": "d114b58f508cb675e889b327889b0c7e"
  },
  {
    "url": "images/emoji/i6.svg",
    "revision": "43988ecc7dde23a79196e8d0d5585667"
  },
  {
    "url": "images/emoji/i7.svg",
    "revision": "f99bb8a788bc35879341c8ffb4901690"
  },
  {
    "url": "images/emoji/i8.svg",
    "revision": "bc23299fd30a7bb18ceece44f927e342"
  },
  {
    "url": "images/emoji/k1.svg",
    "revision": "b03dd99e3f761bd788088490b75994d4"
  },
  {
    "url": "images/emoji/k10.svg",
    "revision": "471a613743075cfdd6837379030387ce"
  },
  {
    "url": "images/emoji/k11.svg",
    "revision": "8c8cde6b1c41c325917564979f3c24ef"
  },
  {
    "url": "images/emoji/k12.svg",
    "revision": "21bae1f238c943618db25001d5f70159"
  },
  {
    "url": "images/emoji/k13_diego.svg",
    "revision": "633e6a50990144fdbcb816f7e997987a"
  },
  {
    "url": "images/emoji/k14.svg",
    "revision": "c3cd6d1393e8ab34e55337b69a2ca869"
  },
  {
    "url": "images/emoji/k15.svg",
    "revision": "02905de823e66bb404ec4f3f7ca13116"
  },
  {
    "url": "images/emoji/k16.svg",
    "revision": "eef9919e9bc8500538c7635f15eeb15b"
  },
  {
    "url": "images/emoji/k17.svg",
    "revision": "77a6bff7f6884374b85d838fccee68bd"
  },
  {
    "url": "images/emoji/k18.svg",
    "revision": "9ae08c3789abc6aa2adb868207fc8987"
  },
  {
    "url": "images/emoji/k19.svg",
    "revision": "2cb29b86a57f40048b3c59385843166a"
  },
  {
    "url": "images/emoji/k2.svg",
    "revision": "902136f02da3cdca71874748d999d722"
  },
  {
    "url": "images/emoji/k20.svg",
    "revision": "25f0aecd22106265f61b9b9bc9c4d065"
  },
  {
    "url": "images/emoji/k3.svg",
    "revision": "ecf8fb552cc8fac42238957bbe1cacd5"
  },
  {
    "url": "images/emoji/k3b.svg",
    "revision": "bdc6743dac306a82993be1a6c1f3c9ee"
  },
  {
    "url": "images/emoji/k4.svg",
    "revision": "d67bc8e5b346c464b1c5df2d789338fa"
  },
  {
    "url": "images/emoji/k5.svg",
    "revision": "05820a37fb1ee87a72a8b986864d0029"
  },
  {
    "url": "images/emoji/k6.svg",
    "revision": "8a1b063534385235c7b7683a0cc8d2b6"
  },
  {
    "url": "images/emoji/k7.svg",
    "revision": "a9b989930335225faeaa0bba0ed59bb7"
  },
  {
    "url": "images/emoji/k8.svg",
    "revision": "046a723a5212ca882865fcc57eca199e"
  },
  {
    "url": "images/emoji/k9.svg",
    "revision": "ee65393e011820171a4ca7a9f27a9fd5"
  },
  {
    "url": "images/emoji/l1.svg",
    "revision": "332a19c934568f8901514a3651ded9a7"
  },
  {
    "url": "images/emoji/l2.svg",
    "revision": "546917d0e33f61395938d0f52c72299f"
  },
  {
    "url": "images/emoji/l3.svg",
    "revision": "da12b6985fdbfc63bfd5a9d0636bbc40"
  },
  {
    "url": "images/emoji/l4.svg",
    "revision": "2e6cc7de7d7aefb89d28113eac909a3e"
  },
  {
    "url": "images/emoji/n1.svg",
    "revision": "7356fdd51fadbfc1101e1c8ec8379677"
  },
  {
    "url": "images/emoji/n10.svg",
    "revision": "0f974c5db57d3476fce7adab8474480f"
  },
  {
    "url": "images/emoji/n11.svg",
    "revision": "8fa89c19f6a9a6d2442515df99ad6ade"
  },
  {
    "url": "images/emoji/n12.svg",
    "revision": "86f59bb2bb04439a839a98d282af34c4"
  },
  {
    "url": "images/emoji/n2.svg",
    "revision": "3ca755945f798f8ad9853b7433a95d71"
  },
  {
    "url": "images/emoji/n3.svg",
    "revision": "b5e20a7a6136bee9e1c634debef797de"
  },
  {
    "url": "images/emoji/n4.svg",
    "revision": "aafbe99616f5c2342542145fac3cccdf"
  },
  {
    "url": "images/emoji/n5.svg",
    "revision": "eda569c4f5a1be16c0b7148e23512488"
  },
  {
    "url": "images/emoji/n6.svg",
    "revision": "246f161db6aaaf9e3bc6a5320efe253d"
  },
  {
    "url": "images/emoji/n7.svg",
    "revision": "66efc95162c116ca01a920703be48d46"
  },
  {
    "url": "images/emoji/n8.svg",
    "revision": "89119b384943c2be4d0f0ebf6cbcade1"
  },
  {
    "url": "images/emoji/n9.svg",
    "revision": "865cc684f459712debb3957ad0f79ad1"
  },
  {
    "url": "images/emoji/o1.svg",
    "revision": "4b3d4dcadb9d7cb5023519c56096b823"
  },
  {
    "url": "images/emoji/o2.svg",
    "revision": "db86beca9e4b3336a17509a47f95ead2"
  },
  {
    "url": "images/emoji/o3.svg",
    "revision": "0c07b7419407c1a9f1698fca946b3a0c"
  },
  {
    "url": "images/emoji/o4.svg",
    "revision": "60db5f5346558ff8fc8a21505b65d0a5"
  },
  {
    "url": "images/emoji/o5.svg",
    "revision": "ebb36bf5a554779bd236cf5c97dc1e89"
  },
  {
    "url": "images/emoji/o6.svg",
    "revision": "28aaee79afdd690e702e82f658f632c7"
  },
  {
    "url": "images/emoji/o7.svg",
    "revision": "e3e5e4df1ec2ed459385a81299aaae0f"
  },
  {
    "url": "images/emoji/o8.svg",
    "revision": "2d55685117d54a9dc6c709a6f2399f3d"
  },
  {
    "url": "images/emoji/p1.svg",
    "revision": "a9556ac5bb774ec44c6b4f406e94d285"
  },
  {
    "url": "images/emoji/p2.svg",
    "revision": "57adf5f31356c9dc99592e8d6928da78"
  },
  {
    "url": "images/emoji/q1.svg",
    "revision": "d4854d76de0b6e2e6796acd81494e7ea"
  },
  {
    "url": "images/emoji/q2.svg",
    "revision": "a01a107ed40ae7df2b1657c4f62125f7"
  },
  {
    "url": "images/emoji/q3.svg",
    "revision": "3cebf79b5e8f8f5281e703db9b3a195c"
  },
  {
    "url": "images/emoji/q4.svg",
    "revision": "a6b889ef0ce1886845fc7153b0a22ca2"
  },
  {
    "url": "images/emoji/q5.svg",
    "revision": "ce5d10ebe3a039f84017b92851a0991e"
  },
  {
    "url": "images/emoji/q6.svg",
    "revision": "c1d772dd06e5c31218f5db75af9d1e31"
  },
  {
    "url": "images/emoji/q7.svg",
    "revision": "26eff11c421fafcb33dd5761f432d561"
  },
  {
    "url": "images/emoji/s1.svg",
    "revision": "aafdd7b2181f93266a22c2234688c93a"
  },
  {
    "url": "images/emoji/s2.svg",
    "revision": "e17445597e97bd0bc799f20df0fe9ad7"
  },
  {
    "url": "images/emoji/s3.svg",
    "revision": "57f3b05b0bfbb19dfb959b2ffd5c6b64"
  },
  {
    "url": "images/emoji/s4.svg",
    "revision": "aae043fa6196ff6016fb970db995a5f9"
  },
  {
    "url": "images/emoji/s5.svg",
    "revision": "26dd044c7e799fb6dc3b3e5abaca8218"
  },
  {
    "url": "images/emoji/s6.svg",
    "revision": "a8bc2f90d2c5a106496f0d7ea94a5356"
  },
  {
    "url": "images/emoji/u1.svg",
    "revision": "93bc40de9647a57890fac90dc7fcf0ee"
  },
  {
    "url": "images/emoji/u2.svg",
    "revision": "da49626ac0b2b34581e1772ac50549cc"
  },
  {
    "url": "images/emoji/u3.svg",
    "revision": "214fda38056c67e5f9af3dc55c5b0782"
  },
  {
    "url": "images/emoji/u4.svg",
    "revision": "abf0faf81c6ad86013f60cb8713f1f08"
  },
  {
    "url": "images/emoji/u5.svg",
    "revision": "89f229a381d6a02803f8cef2c656086f"
  },
  {
    "url": "images/emoji/u6.svg",
    "revision": "6c4287f5e1f6c63c13855f365f586d26"
  },
  {
    "url": "images/emoji/u7.svg",
    "revision": "36b5c71ddcd466b9204169b98e542fda"
  },
  {
    "url": "images/emoji/v1.svg",
    "revision": "55cd269c989f51906b95882583e3185c"
  },
  {
    "url": "images/emoji/v2.svg",
    "revision": "80d497bf56c5cb0f89284541210f346a"
  },
  {
    "url": "images/emoji/w1.svg",
    "revision": "dce3aceb9775a36841fd1202a145678d"
  },
  {
    "url": "images/emoji/w2.svg",
    "revision": "5c41e051cd0c75f682ae64eb77cdd169"
  },
  {
    "url": "images/emoji/w3.svg",
    "revision": "ef35d4114b06fa2037d86ffd7522db4a"
  },
  {
    "url": "images/emoji/w4.svg",
    "revision": "37a690f285d250bdd07ceebcc17c1744"
  },
  {
    "url": "images/emoji/w5.svg",
    "revision": "fc96fe981048e2b1be35ce6cbadcb1be"
  },
  {
    "url": "images/emoji/w6.svg",
    "revision": "683fd31741174629cb859a8793055427"
  },
  {
    "url": "images/emoji/w7.svg",
    "revision": "77dd0eac6facd0de86af77fb376516ae"
  },
  {
    "url": "images/favicon.png",
    "revision": "775974fcb59c4262388c4736d05b6822"
  },
  {
    "url": "images/homescreen/192.png",
    "revision": "88a6fef462ec31ed2eb910541830c062"
  },
  {
    "url": "images/homescreen/512.png",
    "revision": "f9be533422ab308bad000c6a71f426d9"
  },
  {
    "url": "images/iconic/action-redo.svg",
    "revision": "91f5b3c7c6eeb1177209fce70c52151f"
  },
  {
    "url": "images/iconic/action-undo.svg",
    "revision": "6af2efd731b222b858bb130617949d51"
  },
  {
    "url": "images/iconic/arrow-left.svg",
    "revision": "56fdaefc908795c3a0d5f3a261dd8fe6"
  },
  {
    "url": "images/iconic/arrow-right.svg",
    "revision": "6fbb42515119019241fae1a8d7ead0c5"
  },
  {
    "url": "images/iconic/brush.svg",
    "revision": "ba1b9466b222f07b127391f59192c801"
  },
  {
    "url": "images/iconic/camera-slr.svg",
    "revision": "b5b458c9ef2f9f8f4b40785eb1ffee49"
  },
  {
    "url": "images/iconic/cog.svg",
    "revision": "a5a5c1cc7f549af00d1e78b7819e1faf"
  },
  {
    "url": "images/iconic/data-transfer-download.svg",
    "revision": "04a102d425d47498d84c1d3826dced66"
  },
  {
    "url": "images/iconic/grid-two-up.svg",
    "revision": "c034f7460772ced2e863491c55b83afd"
  },
  {
    "url": "images/iconic/home.svg",
    "revision": "70078775e644be8e787945b6997fae49"
  },
  {
    "url": "images/iconic/pencil.svg",
    "revision": "2d4fdbaa6ac4b7b7b5df7190b9411cb8"
  },
  {
    "url": "images/iconic/trash.svg",
    "revision": "73b568791dd5201cebd0e31d9b24530e"
  },
  {
    "url": "images/iconic/wrench.svg",
    "revision": "0f5ceaaa04345d71e13eb8240342a94a"
  },
  {
    "url": "images/snapwat-icon-purple.svg",
    "revision": "03a711bba2af0b0baa3e1a3fe71836b7"
  },
  {
    "url": "images/snapwat-icon-white.svg",
    "revision": "e2573c413202f5a9b904e61f0282fa6f"
  },
  {
    "url": "images/twitter-logo.svg",
    "revision": "f8946fefe40f7248abcbaa0b303f7e97"
  },
  {
    "url": "index.html",
    "revision": "6dc5d267ff9af001477f597d3d0e5c00"
  },
  {
    "url": "manifest.json",
    "revision": "b172789f9d57993c5a036b34b33e6024"
  },
  {
    "url": "redirect.html",
    "revision": "5bdae1f536d202410e5e613ffa03e854"
  },
  {
    "url": "sounds/camera.wav",
    "revision": "6d19f4e69183378b98c8501b1e7bddee"
  },
  {
    "url": "vendor/hello.min.js",
    "revision": "6c4dc33c39f90bb20b46fc458dab6d93"
  },
  {
    "url": "vendor/hello.polyfill.js",
    "revision": "64c790413b5e67a88dfb87ef4573edff"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
