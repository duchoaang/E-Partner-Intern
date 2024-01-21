import {useState, useEffect} from 'react';
import { PlanWrapper, PlanHeader, HeaderTitle,PlanBodyWrapper, BodyContent, ButtonPlan, BodyHeader } from '@s/PlanStyles';
import { ContentLeft, IconLeft, TitleLeft, ContentRight, ContentWrapper, ContentDetails, BodyContentWrapper } from '@s/PlanStyles';
const plan = [
    {
        id : 1,
        name: "Kế hoạch tập cơ bụng",
        so_ngay_tap: 7,
    },
    {
        id : 2,
        name: "Kế hoạch tập chân",
        so_ngay_tap: 5,
    },
    {
        id : 3,
        name: "Kế hoạch tập tay",
        so_ngay_tap: 4,
    }
]
const planDetails = [
     {
        id: 1,
        ngay: 3,
        id_plan: 1,
     },
     {
        id: 1,
        ngay: 2,
        id_plan: 1,
     },
     {
        id: 1,
        ngay: 1,
        id_plan: 1,
     }
]
const dayDetails = [
    {
        id:1,
        noi_dung_tap: "Tập cơ bụng",
        id_plan: 1,
        id_plan_details:1 
    }
]


const Plan = () => {
    const [numberPlan, setNumberPlan] = useState(2);

    const [listPlan, setListPlan] = useState([]);
    

    return (
        <PlanWrapper>
            <PlanHeader>
                <HeaderTitle>
                Kế hoạch tập các nhóm cơ trong tuần
                </HeaderTitle>
            </PlanHeader>
        
            <PlanBodyWrapper>
                <BodyHeader>
                   
                    
                    <ButtonPlan>1</ButtonPlan>
                    <ButtonPlan>Tạo mới</ButtonPlan>
                </BodyHeader>
                <BodyContent>
                   {Array.from(Array(7).keys()).map((index) => (
                      <>
                   <BodyContentWrapper>
                        <ContentLeft>
                       
                       <IconLeft>
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                               <path d="M1 1H13" stroke="#484848" strokeWidth="2" strokeLinecap="round"/>
                               <path d="M1 6.82353H13" stroke="#484848" strokeWidth="2" strokeLinecap="round"/>
                               <path d="M1 12H13" stroke="#484848" strokeWidth="2" strokeLinecap="round"/>
                           </svg>
                       </IconLeft>
                       
                         
                      
                         <TitleLeft key={index}>Thứ {index + 2}</TitleLeft>
                        </ContentLeft>
                  
                        <ContentRight>
                            <ContentWrapper>
                                <ContentDetails><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22.9971 12.488V13.3295C22.928 13.4392 22.8743 13.5638 22.787 13.6548C22.1536 14.3163 21.5164 14.9738 20.8743 15.6274C20.6526 15.8539 20.382 15.8974 20.1037 15.753C19.1719 15.2705 18.4099 14.604 17.9589 13.6083C17.9425 13.5727 17.9205 13.5401 17.8859 13.4797C17.8533 13.5559 17.8303 13.6004 17.8139 13.6469C17.0548 15.8173 16.5702 18.044 16.5261 20.3608C16.5155 20.9363 16.2881 21.1667 15.7401 21.1667C13.2344 21.1667 10.7287 21.1667 8.223 21.1667C7.72685 21.1667 7.47926 20.9254 7.47158 20.4162C7.43895 18.311 7.03301 16.2751 6.39867 14.2827C6.31518 14.0206 6.22017 13.7625 6.11845 13.4699C6.08102 13.5322 6.06375 13.5549 6.05319 13.5796C5.60694 14.5763 4.85456 15.2527 3.92272 15.7392C3.61275 15.9013 3.34884 15.8588 3.10028 15.6047C2.47554 14.9649 1.85559 14.3212 1.23085 13.6815C1.06866 13.5153 0.984212 13.3206 1.00245 13.0852C1.04275 12.571 1.05715 12.0529 1.13776 11.5457C1.31146 10.4461 1.72412 9.45533 2.49665 8.6465C2.55615 8.5842 2.58494 8.46555 2.58494 8.37359C2.59454 5.76513 4.96108 3.81127 7.44183 4.3729C7.56947 4.40158 7.65392 4.37686 7.74413 4.28095C8.12416 3.88048 8.51378 3.48892 8.89477 3.08845C9.06175 2.91443 9.25177 2.83334 9.48977 2.83334C11.1653 2.8373 12.84 2.8373 14.5156 2.83334C14.7536 2.83334 14.9436 2.91739 15.1077 3.09142C15.3975 3.39795 15.7142 3.67976 15.9819 4.00507C16.2324 4.30962 16.4934 4.47574 16.8783 4.30468C16.885 4.30171 16.8927 4.3027 16.8994 4.30171C19.3024 4.00013 21.3878 5.89566 21.4146 8.3993C21.4146 8.48433 21.4501 8.59013 21.5068 8.64946C22.1737 9.34854 22.5768 10.193 22.7822 11.1393C22.8781 11.5832 22.929 12.0381 23 12.487L22.9971 12.488ZM11.9916 12.042C12.2104 12.1913 12.4091 12.3357 12.6164 12.4652C13.6682 13.1188 14.7881 13.3522 15.9906 13.013C16.8284 12.7767 17.5404 12.3051 18.1882 11.7217C18.503 11.4379 18.5548 11.0374 18.3168 10.7437C18.0673 10.4362 17.6834 10.4303 17.3447 10.7091C17.0769 10.9296 16.8063 11.1511 16.5146 11.3341C15.4685 11.9896 14.4052 12.0094 13.3496 11.3598C13.0501 11.1758 12.7718 10.9524 12.4983 10.7279C12.1394 10.4333 11.8573 10.4323 11.4993 10.7259C11.2316 10.9464 10.96 11.1669 10.6673 11.3479C9.63276 11.9886 8.58 12.0025 7.53972 11.3667C7.21535 11.1689 6.91977 10.9197 6.62035 10.6805C6.30558 10.4283 5.92267 10.4451 5.68084 10.7408C5.45052 11.0216 5.48315 11.43 5.77488 11.688C6.01384 11.8987 6.26048 12.1024 6.51959 12.2843C7.56947 13.019 8.7086 13.3532 9.97632 13.0625C10.7229 12.8914 11.3755 12.5167 11.9887 12.042H11.9916ZM12.0031 7.14055C11.9436 7.0832 11.887 7.02981 11.8323 6.97641C11.2911 6.45235 10.6721 6.07067 9.95041 5.87291C9.65195 5.79084 9.38516 5.87489 9.21914 6.1033C8.93892 6.48992 9.11933 7.01201 9.59629 7.15044C10.1567 7.31261 10.6299 7.61518 11.0329 8.0374C11.198 8.21044 11.3419 8.40523 11.4984 8.58816C11.7815 8.91743 12.2076 8.92039 12.4945 8.59508C12.5281 8.55651 12.5598 8.51696 12.5905 8.47642C13.0741 7.83865 13.6605 7.35809 14.434 7.13858C14.8044 7.03376 14.9868 6.66692 14.8793 6.30798C14.7737 5.95301 14.4292 5.76909 14.0568 5.86995C13.2613 6.08649 12.5933 6.52651 12.0031 7.14055ZM11.0224 15.0114C11.0176 15.0223 11.0128 15.0341 11.008 15.045C10.8525 15.0648 10.6951 15.0776 10.5416 15.1063C10.4158 15.1301 10.2901 15.1627 10.1692 15.2072C9.82373 15.3347 9.65003 15.7233 9.77671 16.0694C9.90147 16.4105 10.2393 16.5717 10.626 16.4541C10.9485 16.3562 11.2402 16.3631 11.508 16.6053C11.8544 16.9198 12.1433 16.9158 12.4974 16.6014C12.7075 16.4145 12.9427 16.3463 13.2133 16.4155C13.3102 16.4402 13.4071 16.4679 13.505 16.4857C13.8352 16.544 14.147 16.3433 14.2353 16.02C14.3284 15.6828 14.1662 15.3298 13.8428 15.2131C13.2699 15.0065 12.6979 14.9867 12.1308 15.2537C12.0559 15.2893 11.9456 15.2744 11.8592 15.2517C11.578 15.1785 11.3007 15.0915 11.0214 15.0094L11.0224 15.0114ZM13.935 18.8282C13.933 18.5671 13.8025 18.3526 13.5616 18.2309C13.0943 17.9956 12.6231 17.9946 12.1596 18.2369C12.0454 18.2962 11.959 18.2992 11.8429 18.2388C11.3717 17.9916 10.8938 17.9936 10.4216 18.2388C10.102 18.4059 9.97536 18.7777 10.1145 19.1031C10.2489 19.4165 10.603 19.5886 10.9206 19.4541C11.1538 19.3552 11.3141 19.4224 11.4811 19.5777C11.8506 19.9228 12.15 19.9238 12.5156 19.5806C12.6816 19.4244 12.839 19.3582 13.0751 19.4521C13.5041 19.6232 13.9398 19.2919 13.9359 18.8272L13.935 18.8282Z" fill="white"/>
            </svg></ContentDetails>
                            </ContentWrapper>
                        </ContentRight>
                     </BodyContentWrapper>
                      </>
                     ))}
                </BodyContent>
            </PlanBodyWrapper>


        </PlanWrapper>


    );
}

export default Plan;