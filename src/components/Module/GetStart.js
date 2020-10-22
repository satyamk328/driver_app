import React, { useCallback, memo, useRef, useState } from "react";
import {
    FlatList,
    View,
    Dimensions,
    Text,
    Button,
    StyleSheet,
    Image,
} from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const slideList = Array.from({ length: 4 }).map((_, i) => {
    return {
        id: i,
        image: `https://picsum.photos/1440/2842?random=${i}`,
        title: `This is the title ${i + 1}!`,
        subtitle: `This is the subtitle ${i + 1}!`,
    };
});

const Slide = memo(function Slide({ data }) {
    return (
        <View style={styles.slide}>
            <Image source={{ uri: data.image }} style={styles.slideImage}></Image>
            <Text style={styles.slideTitle}>{data.title}</Text>
            <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
        </View>
    );
});

function Pagination({ index }) {
    return (
        <View style={styles.pagination} pointerEvents="none">
            {slideList.map((_, i) => {
                return (
                    <View
                        key={i}
                        style={[
                            styles.paginationDot,
                            index === i
                                ? styles.paginationDotActive
                                : styles.paginationDotInactive,
                        ]}
                    />
                );
            })}
        </View>
    );
}

export default function GetStart({navigation}) {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        // Prevent one pixel triggering setIndex in the middle
        // of the transition. With this we have to scroll a bit
        // more to trigger the index change.
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 2,
        keyExtractor: useCallback(s => String(s.id), []),
        getItemLayout: useCallback(
            (_, index) => ({
                index,
                length: windowWidth,
                offset: index * windowWidth,
            }),
            []
        ),
    };

    const renderItem = useCallback(function renderItem({ item }) {
        return <Slide data={item} />;
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <FlatList
                        data={slideList}
                        style={styles.carousel}
                        renderItem={renderItem}
                        pagingEnabled
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        onScroll={onScroll}
                        {...flatListOptimizationProps}
                    />
                    <Pagination index={index}></Pagination>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="SignUp" onPress={(e) => navigation.navigate('ManageSignUp')}></Button>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    slide: {
        height: windowHeight,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    slideImage: { 
        width: windowWidth * 0.9, 
        height: windowHeight * 0.7 
    },
    slideTitle: { 
        fontSize: 24 
    },
    slideSubtitle: { 
        fontSize: 18 
    },
    pagination: {
        position: "absolute",
        bottom: 8,
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 2,
    },
    paginationDotActive: { backgroundColor: "lightblue" },
    paginationDotInactive: { backgroundColor: "gray" },

    carousel: { flex: 1 },
    topContainer: {
        height: windowHeight - 100,
        //position:"absolute"
    },
    buttonContainer: {
        position: "absolute"
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})