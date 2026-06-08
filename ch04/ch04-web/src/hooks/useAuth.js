import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { signIn, signUp } from "../api/authApi";
import { useAuthStore } from "../store/authStore";

export function useSignUp() {
    const nvigate = useNavigate();

    return useMutation({
        mutationFn: (signUpData) => signUp(signUpData),
        onSuccess: () => {
            alert("회원가입 성공! 로그인해주세요")
            nvigate("/auth/signin")
        },  
        onError: (error) => {
            const message = error.response.data.body.message;
            alert(message);

        }
    });
}

export function useSignIn() {
    const nvigate = useNavigate();
    const saveToken = useAuthStore((state) => state.saveToken);
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (signInData) => signIn(signInData),
        onSuccess: (data) => {
            saveToken(data.body.accessToken);
            queryClient.invalidateQueries(); //새로운 로그인시 기존에 있던 토큰을 날리는 구문   invalidateQueries()는 모든 토큰 삭제 ()안에 key값을 넣으면 그것만 삭제
            nvigate("/");
        },
        onError: (error) => {
            const message = error.response.data.body.message;
            alert(message);
        }
    });
}