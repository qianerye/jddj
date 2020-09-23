import styled from 'styled-components'

export const BannerWrap = styled.div`
    .bj-img {
        img {
            width: 100%;
            height: 100%;
        }
    }
`

export const NearShopWrap = styled.div`
    background: #fff;
    border-radius: 16px;

    .store-filter-box {
        display: flex;
        .store-filter-innerbox {
            flex: 1;
        }
    }
    .flex {
        display: flex;
    }
    .shop-logo {
        position: relative;
        height: 66px;
        margin-right: 10px;
        .shop-logo-box {
            height: 100%;
            img {
                height: 100%;
            }
        }
    }
    .star-wrap {
        img {
            height: 100%;
        }
    }
    .arrow-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const SaleWrap = styled.div`
    border-radius: 16px;
    padding-bottom: 20px;
    background: #fff;
    margin: 10px 0;
    .list-wrap {
        background-color: #fff;
        white-space: nowrap;
        overflow-x: scroll;
        margin-top: 10px;
        .list-item {
            padding-left: 10px;
            width: 105px;
            display: inline-block;
            .item-img {
                position: relative;
                width: 100%;
                img {
                    width: 100%;
                }
                .storeLogo {
                    position: absolute;
                    top: 5px;
                    left: 5px;
                    width: 24px;
                    height: 24px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .number-discount {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    background-image: linear-gradient(
                        135deg,
                        rgb(255, 125, 125) 0%,
                        rgb(255, 81, 56) 100%
                    );
                    color: rgb(255, 255, 255);
                    font-family: PingFangSC-Regular;
                    font-size: 10px;
                }
            }
            .item-title {
                width: 100%;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                height: 32px;
                line-height: 16px;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
                white-space: normal;
            }
            .item-footer {
                display: flex;
                .item-price {
                    flex: 1;
                    div:first-child {
                        color: rgb(255, 87, 87);
                        font-family: PingFangSC-Regular;
                        font-weight: bold;
                        line-height: 17px;
                    }
                    div:last-child {
                        color: rgb(153, 153, 153);
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        font-weight: normal;
                        line-height: 15px;
                        text-decoration-line: line-through;
                    }
                }
                .item-footer-img {
                    width: 26px;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
`

export const WelfareWarp = styled.div`
    img {
        width: 100%;
        height: 100%;
    }
`

export const DiscountWrap = styled.div`
    background: #fff;
    margin-top: 10px;
    padding-bottom: 20px;
    border-radius: 16px;
    .discount-box {
        margin: 0 10px;
        display: flex;
        margin-top: 10px;
        .discount-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.03);
            margin-right: 5px;
            &:last-child {
                margin-right: 0;
            }
            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                span:first-child {
                    color: #ff5757;
                    font-size: 14px;
                }
                span:last-child {
                    color: rgb(51, 51, 51);
                    font-size: 12px;
                }
            }

            img {
                width: 60px;
            }
        }
    }

    .img-list {
        display: flex;
        > div {
            width: 50%;
            border-radius: 5px;
            overflow: hidden;
            img {
                width: 100%;
            }
            &:first-child {
                margin-left: 10px;
            }
            &:last-child {
                margin: 0 10px;
            }
        }
    }
`
