# ベースイメージとして公式のPostgreSQLイメージを使用
FROM postgres:latest

# 環境変数を設定
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydatabase

# 初期化スクリプトをコピー（必要に応じて）
# COPY init.sql /docker-entrypoint-initdb.d/

# ポートを公開
EXPOSE 5432
