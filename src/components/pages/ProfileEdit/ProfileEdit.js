import Topbar from "../../top-bar/top-bar";
import ProfileCardEdit from "../../profile-card-edit/profile-card-edit";
import FormProfileEdit from "../../forms/form-profile-edit";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const ProfileEdit = (props) => {
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 1, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim1', {y: 500}, { duration: 1.5, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim2', {y: 500}, { duration: 2, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim3', {y: 500}, { duration: 2.5, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim4', {y: 500}, { duration: 3, ease: "expo.out", y: 0 });
    })

    return (
        <>
            <div className="container-fluid">
                <div className="row position-sticky top-0" style={{zIndex: 2}}>
                    <Topbar text="Edit Profile" username="UserName" where="profile-edit"/>
                </div>
                <div className="col overflow-y-auto" style={{maxHeight: '93vh'}}>
                    <div className="anim0 row">
                        <ProfileCardEdit id='0'/>
                    </div>  
                    <div className="row">
                        <div className="anim1 col overflow-auto p-0">
                            <FormProfileEdit title="Password" />
                        </div>
                        <div className="anim2 col overflow-auto p-0">
                            <FormProfileEdit title="Nickname" />
                        </div>
                        <div className="anim3 col overflow-auto p-0">
                            <FormProfileEdit title="Email" current="tXXXXst@XXXX.XX" />
                        </div>
                        <div className="anim4 col overflow-auto p-0">
                            <FormProfileEdit title="Phone" current="+38 XXXXX 009" />
                        </div>    
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileEdit;