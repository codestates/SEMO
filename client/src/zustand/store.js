import create from "zustand";
//TEST
//teststststststststt
export const useStore = create((set) => ({
  loginmodal: false,
  signupmodal: false,
  islogin: false,
  school: "",
  grade: "",
  subject: "",

  openLoginModal: () => set({ loginmodal: true }),
  closeLoginModal: () => set({ loginmodal: false }),
  openSignupModal: () => set({ signupmodal: true }),
  closeSignupModal: () => set({ signupmodal: false }),
  changeModal: () => set({ loginmodal: false, signupmodal: true }),
  setLogin: () => set({ islogin: true }),
  setLogOut: () => set({ islogin: false }),
  selectSchool: (a) => set((state) => ({ school: (state.school = a) })),
  selectGrade: (a) => set((state) => ({ grade: (state.grade = a) })),
  selectsubject: (a) => set((state) => ({ subject: (state.subject = a) })),
}));
// qjastar a123456
export const useStoreTemp = create((set) => ({
  loginmodal: false,
  isEditnickname: false,
  isEditPw: false,
  password: "a",
  nickname: "",
  inputPw: "",
  confirmInputPw: "",
  title: "",
  text: "",
  testId: "",
  testPw: "",
  jwttoken: "",
  clickMyPage: false,
  signOutModal: false,
  qLists: [],
  clickTitle: "",
  editContentStatus: "",
  clickCotent: "",
  editAnswerId: "",
  editAnswerContent: "",
  clickCreatedAt: "",
  filterSchool: "",
  filterGrade: "",
  filterSubject: "",
  isSearch: false,
  setisSearchFalse: () => set({ isSearch: false }),
  setisSearchTrue: () => set({ isSearch: true }),
  setFilterSchool: (a) =>
    set((state) => ({ filterSchool: (state.filterSchool = a) })),
  setFilterGrade: (a) =>
    set((state) => ({ filterGrade: (state.filterGrade = a) })),
  setFilterSubject: (a) =>
    set((state) => ({ filterSubject: (state.filterSubject = a) })),
  setClickCreatedAt: (a) =>
    set((state) => ({ clickCreatedAt: (state.clickCreatedAt = a) })),
  setEditAnswerContent: (a) =>
    set((state) => ({ editAnswerContent: (state.editAnswerContent = a) })),
  setEditAnswerId: (a) =>
    set((state) => ({ editAnswerId: (state.editAnswerId = a) })),
  setClickContent: (a) =>
    set((state) => ({ clickCotent: (state.clickCotent = a) })),
  setEditContentStatus: (a) =>
    set((state) => ({ editContentStatus: (state.editContentStatus = a) })),
  setClickTitle: (a) =>
    set((state) => ({ clickTitle: (state.clickTitle = a) })),
  setQlists: (a) => set((state) => ({ qLists: (state.qLists = a) })),

  setSignOutModal: () => set({ signOutModal: true }),
  closeSignupModal: () => set({ signOutModal: false }),
  editPwBtn: () => set((state) => ({ isEditPw: (state.isEditPw = true) })),
  cancelEditPwBtn: () => set((state) => ({ isEditPw: !state.isEditPw })),
  editNicknameBtn: () =>
    set((state) => ({ isEditnickname: (state.isEditnickname = true) })),
  cancelEditNicknameBtn: () =>
    set((state) => ({ isEditnickname: !state.isEditnickname })),
  setNickname: (a) => set((state) => ({ nickname: (state.nickname = a) })),
  setInputPw: (a) => set((state) => ({ inputPw: (state.inputPw = a) })),
  setConfrimInputPw: (a) =>
    set((state) => ({ confirmInputPw: (state.confirmInputPw = a) })),
  setTitle: (a) => set((state) => ({ title: (state.title = a) })),
  setText: (a) => set((state) => ({ text: (state.text = a) })),
  setTestId: (a) => set((state) => ({ testId: (state.testId = a) })),
  setTestPw: (a) => set((state) => ({ testPw: (state.testPw = a) })),

  openLoginModal: () =>
    set((state) => ({ loginmodal: (state.loginmodal = true) })),
  setClickMypage: () => set((state) => ({ clickMyPage: !state.clickMyPage })),
  setOffMypage: () =>
    set((state) => ({ clickMyPage: (state.clickMyPage = false) })),
  setUserpassword: (a) => set((state) => ({ nickname: (state.password = a) })),
  setWithdraw: (a) =>
    set((state) => ({
      testPw: (state.testPw = ""),
      testId: (state.testId = ""),
    })),
}));

export const useUserinfo = create((set) => ({
  user_id: "",
  password: "",
  nickname: "",
  edPw: "",
  nickname2: "",
  profile2: "",

  setUserProfile: (a) => set((state) => ({ profile2: (state.profile2 = a) })),

  setedPw: (a) => set((state) => ({ edPw: (state.edPw = a) })),

  setUserUserid: (a) => set((state) => ({ user_id: (state.user_id = a) })),
  setUserNickname: (a) =>
    set(
      (state) => (
        { nickname: (state.nickname = a) }, { nickname2: (state.nickname2 = a) }
      )
    ),
  setUserPassword: (a) => set((state) => ({ password: (state.password = a) })),

  setUserInfoSignOutClear: () =>
    set({ user_id: "", password: "", nickname: "" }),
}));

export const useScroll = create((set) => ({
  preItems: -14,
  items: -8,

  setPreItems: () => set((state) => ({ preItems: state.items - 6 })),
  setItems: () => set((state) => ({ items: state.preItems })),
}));
