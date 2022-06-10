import create from "zustand";
//TEST
//teststststststststt
export const useStore = create((set) => ({
  loginmodal: false,
  signupmodal: false,
  islogin: false,

  openLoginModal: () => set({ loginmodal: true }),
  closeLoginModal: () => set({ loginmodal: false }),
  openSignupModal: () => set({ signupmodal: true }),
  closeSignupModal: () => set({ signupmodal: false }),
  changeModal: () => set({ loginmodal: false, signupmodal: true }),
  setLogin: () => set({ islogin: true }),
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
  jwttoken: "",
  clickMyPage: false,

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
  setTestId: (a) => set((state) => ({ testId: (state.testId = a) })),
  setTestPw: (a) => set((state) => ({ testPw: (state.testPw = a) })),
  openLoginModal: () =>
    set((state) => ({ loginmodal: (state.loginmodal = true) })),
  setClickMypage: () =>
    set(
      (state) => (
        { clickMyPage: (state.clickMyPage = true) }, console.log("click")
      )
    ),

  setUserpassword: (a) =>
    set((state) => ({ nickname: (state.password = a) }), console.log(a)),
}));

export const useUserinfo = create((set) => ({
  user_id: "",
  password: "",
  nickname: "",

  setUserUserid: (a) => set((state) => ({ user_id: (state.user_id = a) })),
  setUserNickname: (a) => set((state) => ({ nickname: (state.nickname = a) })),
  setUserPassword: (a) => set((state) => ({ password: (state.password = a) })),
}));
