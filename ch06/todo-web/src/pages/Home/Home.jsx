import { Link } from "react-router";
import TextButton from "../../components/buttons/TextButton/TextButton";
import Header from "../../components/Header/Header";
import { useMe } from "../../hooks/queries/useUser";
import * as s from "./styles";
import { useCategories, useCategoryNotCompletedCount } from "../../hooks/queries/useCategory";
import { useState } from "react";
import Modal from "../Modal/Modal";

function Home() {
    const meQuery = useMe();
    const categoiesQuery = useCategories();
    const categoryNotCompletedCountQuery = useCategoryNotCompletedCount();
    const [modalOpen, setModalOpen] = useState(false);

    const modalOpenHandleOnClick = () => {
        setModalOpen(true)
    }


    return (
        <div css={s.layout}>
            <Header>
                <h2 css={s.title}>ReMind</h2>
                <div css={s.profile(meQuery.data?.body?.profileImage)}></div>
            </Header>
            <div css={s.top}>
                <div css={s.leftup}>
                    <div css={s.leftupin}>
                        <div css={s.icon}>
                            <svg data-dc-tpl="86" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle data-dc-tpl="87" cx="8" cy="8" r="5.5" stroke="white" strokeWidth="1.8"></circle><path data-dc-tpl="88" d="M8 5.5V8.5l2 1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"></path></svg>
                        </div>
                        <span css={s.day}>5</span>
                    </div>
                    <span css={s.message}>오늘</span>
                </div>

                <div css={s.rightup}>
                    <div css={s.leftupin}>
                        <div css={s.icon}>
                            <svg data-dc-tpl="94" width="15" height="15" viewBox="0 0 15 15" fill="none"><rect data-dc-tpl="95" x="1.5" y="2.5" width="12" height="11" rx="2" stroke="white" strokeWidth="1.8"></rect><path data-dc-tpl="96" d="M1.5 6.5h12M5 1.5v3M10 1.5v3" stroke="white" strokeWidth="1.8" strokeLinecap="round"></path></svg>
                        </div>
                        <span css={s.day}>6</span>
                    </div>
                    <span css={s.message}>예정</span>
                </div>

                <div css={s.leftdown}><div css={s.leftupin}>
                    <div css={s.icon}>
                        <svg data-dc-tpl="102" width="16" height="12" viewBox="0 0 16 12" fill="none"><path data-dc-tpl="103" d="M1.5 2h13M1.5 6h13M1.5 10h9" stroke="white" strokeWidth="1.8" strokeLinecap="round"></path></svg>
                    </div>
                    <span css={s.day}>11</span>
                </div>
                    <span css={s.message}>전체</span>
                </div>

                <div css={s.rightdown}><div css={s.leftupin}>
                    <div css={s.icon}>
                        <svg data-dc-tpl="109" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle data-dc-tpl="110" cx="8" cy="8" r="6.5" stroke="white" strokeWidth="1.8"></circle><path data-dc-tpl="111" d="M4.5 8l2.5 2.5L11.5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <span css={s.day}>3</span>
                </div>
                    <span css={s.message}>완료됨</span>
                </div>
            </div>
            <div css={s.main}>
                <div css={s.listGroup}>
                    <div>
                        <h3>나의 목록</h3>
                        <TextButton>편집</TextButton>
                    </div>
                    <ul>
                        {
                            categoiesQuery.isLoading
                                ? <></>
                                : categoiesQuery.data?.body?.map(category => (
                                    <li key={category.categoryId}>
                                        <Link to={`/categories/${category.categoryName}/todos`}>
                                            <div css={s.categoryIcon(category.categoryColor)}>{category.categoryIcon}</div>
                                            <div css={s.categoryName}>{category.categoryName}</div>
                                            <div css={s.categoryCount}>
                                                <span>
                                                    {
                                                        categoryNotCompletedCountQuery.isLoading ||
                                                        categoryNotCompletedCountQuery.data.body
                                                            .find(count => count.id === category.categoryId)
                                                            .notCompletedCount || "0"
                                                    }
                                                </span>
                                                <svg data-dc-tpl="128" width="8" height="13" viewBox="0 0 8 13" fill="none" style={{ "marginLeft": "4px" }}><path data-dc-tpl="129" d="M1 1l6 5.5L1 12" stroke="#C7C7CC" strokeWidth="2" strokelinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                        }
                    </ul>
                    <div>
                        <TextButton  onClick={modalOpenHandleOnClick}>새로운 목록 추가</TextButton>
                        {modalOpen === true ? <Modal /> : null}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;