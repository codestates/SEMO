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
// qjastar a123456
export const useStoreTemp = create((set) => ({
  loginmodal: false,
  isEditnickname: false,
  isEditPw: false,
  password: "a123456",
  nickname: "",
  inputPw: "",
  confirmInputPw: "",
  title: "",
  text: "",
  testId: "",
  testPw: "",

  editPwBtn: () => set((state) => ({ isEditPw: (state.isEditPw = true) })),
  editNicknameBtn: () =>
    set((state) => ({ isEditnickname: (state.isEditnickname = true) })),
  cancelEditNicknameBtn: () =>
    set((state) => ({ isEditnickname: !state.isEditnickname })),
  setNickname: (a) =>
    set((state) => ({ nickname: (state.nickname = a) }), console.log(a)),
  setInputPw: (a) =>
    set((state) => ({ inputPw: (state.inputPw = a) }), console.log(a)),
  setConfrimInputPw: (a) =>
    set(
      (state) => ({ confirmInputPw: (state.confirmInputPw = a) }),
      console.log(a)
    ),
  setTitle: (a) =>
    set((state) => ({ title: (state.title = a) }), console.log(a)),
  setText: (a) => set((state) => ({ text: (state.text = a) }), console.log(a)),
  setTestId: (a) =>
    set((state) => ({ testId: (state.testId = a) }), console.log(a)),
  setTestPw: (a) =>
    set((state) => ({ testPw: (state.testPw = a) }), console.log(a)),
  openLoginModal: () =>
    set((state) => ({ loginmodal: (state.loginmodal = true) })),
}));
