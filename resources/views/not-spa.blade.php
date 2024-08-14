<x-app-layout>
    <div id="example"></div>
    <div class="blade-area" style="margin-top: 50px;">
        <p>bladeエリア</p>
        <a href="{{route('posts.index')}}">投稿一覧</a>
    </div>
    {{-- <script type="module" src="{{ mix('js/app.js') }}"></script> --}}
    {{-- <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    {{-- reactの場合はコンパイルが必要なので、babelを使ってコンパイルする --}}
    {{-- ブラウザでのコンパイルは重い --}}
    {{-- <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> 
    <script type="text/babel">
    </script> --}}
</x-app-layout>
