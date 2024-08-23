// show.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShowComponent from "@/Pages/Posts/show"; // show.jsxのコンポーネントをインポート
import { showFlashMessage } from "@/Utils/flashMessage"; // showFlashMessage関数をインポート

jest.mock("./showFlashMessage"); // showFlashMessage関数をモック

test("calls showFlashMessage with correct message", () => {
    render(<ShowComponent />);

    // ここで、showFlashMessageが呼び出されるトリガーをシミュレートします
    // 例えば、ボタンをクリックするなど
    userEvent.click(screen.getByRole("button", { name: /更新/i }));

    expect(showFlashMessage).toHaveBeenCalledWith("更新しました");
});
