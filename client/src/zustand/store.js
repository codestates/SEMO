import create from "zustand";

export const useStore = create((set) => ({
  loginmodal: false,
  signupmodal: false,
  openLoginModal: () =>
    set({ loginmodal: true }, console.log("로그인 모달 열림")),
  closeLoginModal: () =>
    set({ loginmodal: false }, console.log("로그인 모달 닫힘")),
  openSignupModal: () =>
    set({ signupmodal: true }, console.log("회원가입 모달 열림")),
  closeSignupModal: () =>
    set({ signupmodal: false }, console.log("회원가입 모달 닫힘")),
  changeModal: () => set({ loginmodal: false, signupmodal: true }),
}));
