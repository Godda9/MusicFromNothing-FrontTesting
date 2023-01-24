import ProfileCardEdit from "../../profile-card-edit/profile-card-edit";
import FormProfileEdit from "../../forms/form-profile-edit";
import { useEffect } from "react";
import { gsap } from "gsap";

const ProfileEdit = (props) => {
    useEffect(() => {
        gsap.fromTo('.anim-head', {y: 500}, { duration: 0.2, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim-f1', {y: 500}, { duration: 0.4, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim-f2', {y: 500}, { duration: 0.6, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim-f3', {y: 500}, { duration: 0.8, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim-f4', {y: 500}, { duration: 1, ease: "expo.out", y: 0 });
    }, [])

    

    return (
        <>
            <div className="anim-head row m-0">
                <ProfileCardEdit id='0'/>
            </div>  
            <div className="row d-flex flex-wrap jusify-content-center row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 m-2 mb-4" >
                <div className="anim-f2 col overflow-auto p-0">
                    <FormProfileEdit title="Nickname" />
                </div>
                <div className="anim-f4 col overflow-auto p-0">
                    <FormProfileEdit title="Description" current="aaaaaaaa" />
                </div> 
                <div className="anim-f1 col overflow-auto p-0">
                    <FormProfileEdit title="Password" />
                </div>
                <div className="anim-f3 col overflow-auto p-0">
                    <FormProfileEdit title="Email" current="tXXXXst@XXXX.XX" />
                </div>
                <div className="anim-f4 col overflow-auto p-0">
                    <FormProfileEdit title="Phone" current="+38 XXXXX 009" />
                </div>    
            </div>
        </>
    );
}

export default ProfileEdit;