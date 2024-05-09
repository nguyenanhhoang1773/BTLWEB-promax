import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
const Detail = ({navigation}) => {
    const [quantity, setQuantity] = useState(1)
    const [feedback, setFeedback] = useState('')
    const plus = () => {
        setQuantity(quantity + 1)
    }
    const minus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        } else {
            alert('không thê giảm số lượng nữa')
        }
    }

    return (
        <SafeAreaView>
            <View>
                <ScrollView>
                    <View >
                        <Ionicons 
                        onPress={()=>navigation.goBack()}
                        name="arrow-back-outline" 
                        style={{ fontSize: 25, padding: 5, backgroundColor: '#DDDDDD', position: 'absolute', zIndex: 2, left: 10, borderRadius: 50, top: 10 }} />
                        <Ionicons name="cart-outline" style={{ fontSize: 25, padding: 5, backgroundColor: '#DDDDDD', position: 'absolute', zIndex: 2, right: 10, borderRadius: 50, top: 10 }} />
                        <Ionicons name="share-social-outline" style={{ fontSize: 25, padding: 5, backgroundColor: '#DDDDDD', position: 'absolute', zIndex: 2, right: 50, borderRadius: 50, top: 10 }} />
                        <Image source={{ uri: `https://tse1.mm.bing.net/th?id=OIP.F0BPYYW2VVfMFpi8F3huqAHaE7&pid=Api&P=0&h=180` }} style={{ width: '100%', height: 300 }} />
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={{ paddingVertical: 10 }}>Ảnh chhi tiết</Text>

                        {/* Nhiều ảnh nhỏ */}
                        <ScrollView horizontal >
                            <TouchableOpacity><Image source={{ uri: `https://tse1.mm.bing.net/th?id=OIP.F0BPYYW2VVfMFpi8F3huqAHaE7&pid=Api&P=0&h=180` }} style={{ width: 100, height: 100, marginRight: 10 }} /></TouchableOpacity>
                            <TouchableOpacity><Image source={{ uri: `https://tse1.mm.bing.net/th?id=OIP.F0BPYYW2VVfMFpi8F3huqAHaE7&pid=Api&P=0&h=180` }} style={{ width: 100, height: 100, marginRight: 10 }} /></TouchableOpacity>
                            <TouchableOpacity><Image source={{ uri: `https://tse1.mm.bing.net/th?id=OIP.F0BPYYW2VVfMFpi8F3huqAHaE7&pid=Api&P=0&h=180` }} style={{ width: 100, height: 100, marginRight: 10 }} /></TouchableOpacity>
                            <TouchableOpacity><Image source={{ uri: `https://tse1.mm.bing.net/th?id=OIP.F0BPYYW2VVfMFpi8F3huqAHaE7&pid=Api&P=0&h=180` }} style={{ width: 100, height: 100, marginRight: 10 }} /></TouchableOpacity>
                            <TouchableOpacity><Image source={{ uri: `https://tse1.mm.bing.net/th?id=OIP.F0BPYYW2VVfMFpi8F3huqAHaE7&pid=Api&P=0&h=180` }} style={{ width: 100, height: 100, marginRight: 10 }} /></TouchableOpacity>
                            <TouchableOpacity><Image source={{ uri: `https://tse1.mm.bing.net/th?id=OIP.F0BPYYW2VVfMFpi8F3huqAHaE7&pid=Api&P=0&h=180` }} style={{ width: 100, height: 100, marginRight: 10 }} /></TouchableOpacity>
                        </ScrollView>

                        {/* Giá sản phẩn */}
                        <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'flex-end' }} >
                            <Text style={{ color: 'red' }}>đ<Text style={{ fontSize: 25 }}>30.000 </Text></Text>
                            <Text style={{ paddingBottom: 3, textDecorationLine: 'line-through', color: '#808080' }}>đ70.350</Text>
                        </View>

                        {/* Số lượng sản phẩm */}
                        <Text>Số lượng mua:</Text>
                        <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                            <Text style={{ fontSize: 15 }} onPress={minus}>-</Text>
                            <Text onChangeText={(text) => setQuantity(text)}
                                style={{ textAlign: 'center', width: 30, fontSize: 15, marginHorizontal: 20 }}>
                                {quantity}
                            </Text>
                            <Text style={{ fontSize: 15 }} onPress={plus}>+</Text>
                        </View>

                        {/* Voucher */}
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ color: 'red' }}>Giá khi mua với <Ionicons name="logo-electron" style={{ fontSize: 15 }} /> Voucher</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text style={{ color: '#33CCFF', borderColor: '#33CCFF', borderWidth: 1, paddingHorizontal: 5, fontSize: 10, marginRight: 10 }}>Miễn phí trả hàng</Text>
                                <Text style={{ color: 'red', borderColor: 'red', borderWidth: 1, paddingHorizontal: 5, fontSize: 10 }}>Mua 2 & giảm 3%</Text>
                            </View>
                        </View>

                        {/* Tên sản phẩm */}
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 15 }}>đây là sản phẩm gới hạn được cung cấp bởi chúng cyoi đây là sản phẩm gới hạn được cung cấp bởi chúng cyoiđây là sản phẩm gới hạn được cung cấp bởi chúng cyoi</Text>
                        </View>

                        {/* Cam kết miễn phí đổi trả */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#FFEEE8', padding: 10 }}>
                            <Ionicons name="logo-codepen" style={{ fontSize: 35, color: 'red', marginRight: 10 }} />
                            <View>
                                <Text style={{ fontSize: 16, color: 'red' }}>Đổi ý miễn phí 15 ngày</Text>
                                <Text style={{ color: '#808080' }}>Miễn 100% phí trả hàng</Text>
                            </View>
                        </View>

                        {/* Số lượng bán ra */}
                        <View style={{ marginTop: 10, paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name="star" style={{ fontSize: 20, color: 'yellow', marginRight: 10 }} />
                                <Text>4.7 / 5 | Đã bán 2,5k</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                                <Ionicons name="heart-outline" style={{ fontSize: 30, color: 'black', marginRight: 30 }} />
                                <Ionicons name="mail-unread-outline" style={{ fontSize: 30, color: '#33CCFF' }} />
                            </View>

                        </View>

                        {/* Top bán chạy */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#FFEEE8', padding: 10 }}>
                            <Ionicons name="trending-up-outline" style={{ fontSize: 35, color: 'red', marginRight: 10 }} />
                            <View>
                                <Text style={{ fontSize: 16, color: 'red' }}>Top bán chạy</Text>

                            </View>
                        </View>

                        {/* Chi tiết sản phẩm */}
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 18 }}>Chi tiết sản phẩm</Text>
                            <View>
                                <Text>
                                    SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE
                                    Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu ở Đông Nam Á, có trụ sở chính ở Singapore, đã có mặt ở khắp các khu vực Singapore, Malaysia, Indonesia, Thái Lan, Philippines, Đài Loan, Brazil, México & Colombia. Với sự đảm bảo của Shopee, bạn sẽ mua hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!


                                    MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN
                                    Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì Shopee.vn là một sự lựa chọn tuyệt vời dành cho bạn. Shopee là trang thương mại điện tử cho phép người mua và người bán tương tác và trao đổi dễ dàng thông tin về sản phẩm và chương trình khuyến mãi của shop. Do đó, việc mua bán trên Shopee trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy tín, Shopee Mall chính là sự lựa chọn lí tưởng dành cho bạn. Để bạn có thể dễ dàng khi tìm hiểu và sử dụng sản phẩm, Shopee Blog - trang blog thông tin chính thức của Shopee - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời trang, review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá tốt bất ngờ.

                                    Đến với Shopee, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có thể tự tạo chương trình khuyến mãi trên Shopee để thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại Shopee Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập nhập ngay các hoạt động của shop.

                                    Bên cạnh đó, Shopee hợp tác với nhiều đơn vị vận chuyển uy tín trên thị trường như SPX,... nhằm cung cấp dịch vu giao nhận và vận chuyển tiện lợi cho cả khách hàng và người bán. Cùng với nhiều ưu đãi với chi phí giao hàng hợp lý, Shopee đảm bảo cho khách hàng trải nghiệm mua sắm thuận tiện nhất.


                                    TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI
                                    Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng mọi lúc, mọi nơi. Bạn có thể tải ứng dụng Shopee cũng như đăng sản phẩm bán hàng một cách nhanh chóng và tiện lợi. Ngoài ra, ứng dụng Shopee còn có những ưu điểm sau:

                                    Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được ngay những sản phẩm nổi bật cũng như dễ dàng tìm đến các ô tìm kiếm, giỏ hàng hoặc tính năng chat liền tay.
                                    Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi trên cùng một tài khoản. Bạn sẽ vừa là người mua hàng, vừa là người bán hàng rất linh hoạt, dễ dàng.
                                    Cập nhập thông tin khuyến mãi, Shopee Flash Sale nhanh chóng và liên tục.
                                    Tại Shopee, bạn có thể lưu các mã giảm giá, Voucher Xtra và
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: 10, backgroundColor: '#808080', marginTop: 5 }}></View>
                        {/* Đánh giá sản phẩm */}
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Đánh giá sản phẩm</Text>
                            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                <Ionicons name="star" style={{ fontSize: 20, color: 'yellow', marginRight: 10 }} />
                                <Ionicons name="star" style={{ fontSize: 20, color: 'yellow', marginRight: 10 }} />
                                <Ionicons name="star" style={{ fontSize: 20, color: 'yellow', marginRight: 10 }} />
                                <Ionicons name="star" style={{ fontSize: 20, color: 'yellow', marginRight: 10 }} />
                                <Ionicons name="star-outline" style={{ fontSize: 20, marginRight: 10 }} />
                                <Text style={{ color: 'red' }}>4/5 (565 đánh giá)</Text>
                            </View>
                            <View>
                                <Text>Để lại đánh giá của bạn:</Text>
                                <TextInput
                                    onChangeText={(text) => setFeedback(text)}
                                    placeholder='Đánh giá của bạn'
                                    style={{ borderWidth: 1, marginTop: 5, borderRadius: 5, paddingLeft: 10 }} />
                            </View>
                            <Text style={{color:'red'}}>- {feedback}</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Detail

const styles = StyleSheet.create({})